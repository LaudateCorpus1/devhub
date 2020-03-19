const dlv = require('dlv');
const path = require('path');
const { getTagPageUriComponent } = require('../get-tag-page-uri-component');
const { SNOOTY_STITCH_ID } = require('../../build-constants');

const STITCH_TYPE_TO_URL_PREFIX = {
    author: 'author',
    languages: 'language',
    products: 'product',
    tags: 'tag',
    type: 'type',
};

const getAuthorIncludesPath = authorName => {
    switch (authorName) {
        // Handle case where REF_DOC_MAP name isnt just lastname-firstname
        case 'Ken W. Alger':
            return 'includes/authors/alger-ken';
        default:
            return `includes/authors/${authorName
                .toLowerCase()
                .split(' ')
                .reverse()
                .join('-')}`;
    }
};

const createTagPageType = async (
    stitchType,
    createPage,
    pageMetadata,
    RESOLVED_REF_DOC_MAPPING,
    stitchClient,
    metadata
) => {
    const isAuthor = stitchType === 'author';
    const pageType = STITCH_TYPE_TO_URL_PREFIX[stitchType];

    // Query for all possible values for this type of tag
    const possibleTagValues = await stitchClient.callFunction(
        'getValuesByKey',
        [metadata, stitchType]
    );

    const requests = [];

    // For each possible tag value, query the pages that exist for it
    await possibleTagValues.forEach(async tag => {
        const requestKey = {};
        requestKey[stitchType] = tag._id;
        requests.push(
            stitchClient.callFunction('fetchDevhubMetadata', [
                metadata,
                requestKey,
            ])
        );
    });

    const pageData = await Promise.all(requests);

    // Once requests finish, map the item with name (and optional image) to the response's return value
    const itemsWithPageData = possibleTagValues.map((r, i) => ({
        item: r,
        pages: pageData[i],
    }));

    const pageList = itemsWithPageData.map(page => {
        const name = isAuthor ? page.item._id.name : page.item._id;
        // Some bad data for authors doesn't follow this structure, so ignore it
        if (!name) return null;
        else {
            const urlSuffix = getTagPageUriComponent(name);
            const newPage = {
                type: pageType,
                name: name,
                slug: `/${pageType}/${urlSuffix}`,
                pages: page.pages,
            };
            if (isAuthor) {
                const authorBioPath = getAuthorIncludesPath(name);
                const bio = dlv(
                    RESOLVED_REF_DOC_MAPPING[authorBioPath],
                    ['ast', 'children', 0, 'children', 0],
                    null
                );
                newPage['author_image'] = page.item._id.image;
                newPage['bio'] = bio;
            }
            return newPage;
        }
    });

    pageList.forEach(page => {
        if (page) {
            createPage({
                path: page.slug,
                component: path.resolve(`./src/templates/tag.js`),
                context: {
                    metadata: pageMetadata,
                    snootyStitchId: SNOOTY_STITCH_ID,
                    ...page,
                },
            });
        }
    });
};

module.exports = { createTagPageType };
