import path from 'path';
import { communityChampions } from '../../queries/community-champions';

const createCommunityChampionProfilePage = (champion, createPage) => {
    const { firstName, lastName } = champion;
    const encodedNameURIComponent = encodeURIComponent(
        `${firstName.toLowerCase()}-${lastName.toLowerCase()}`
    );
    const slug = `/community-champions/${encodedNameURIComponent}`;
    createPage({
        path: slug,
        component: path.resolve(
            `./src/templates/community-champion-profile.js`
        ),
        context: {
            champion,
            slug,
        },
    });
};

const getChampionListFromGraphql = async graphql => {
    const championResp = await graphql(communityChampions);
    const result = championResp.data.allStrapiCommunityChampions.nodes;
    return result;
};

export const createCommunityChampionProfilePages = async (
    createPage,
    graphql
) => {
    const championList = await getChampionListFromGraphql(graphql);
    championList.forEach(champion =>
        createCommunityChampionProfilePage(champion, createPage)
    );
};
