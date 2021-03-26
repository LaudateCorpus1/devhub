import { withPrefix } from 'gatsby';
import { addTrailingSlashBeforeParams } from './add-trailing-slash-if-missing';
import { SITE_URL, FORUMS_URL } from '~src/constants';
import { isLinkForImage } from '~utils/is-link-for-image';

export const makeLinkInternalIfApplicable = (link, includePrefix = false) => {
    if (!link) {
        return link;
    }
    const linkIncludesDevHub = link.includes(SITE_URL);
    const linkGoesToForums = link.includes(FORUMS_URL);
    if (linkIncludesDevHub && !linkGoesToForums) {
        const linkWithoutSiteUrl = link.replace(SITE_URL, '');
        // Forums is technically "external" from an app standpoint, so we leave
        // that one alone
        return isLinkForImage(link)
            ? withPrefix(linkWithoutSiteUrl)
            : addTrailingSlashBeforeParams(
                  includePrefix
                      ? withPrefix(linkWithoutSiteUrl)
                      : linkWithoutSiteUrl
              );
    }
    return link;
};
