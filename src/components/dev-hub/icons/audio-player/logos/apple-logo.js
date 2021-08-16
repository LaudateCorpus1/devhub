import React from 'react';
import PropTypes from 'prop-types';

import { colorMap } from '~components/dev-hub/theme';

const AppleLogo = ({ color = colorMap.greyLightTwo, ...props }) => (
    <svg width="139" height="25" fill="none" {...props}>
        <title>Apple podcasts</title>
        <path
            fill={color}
            d="M32.5 7.04H29V1.38h.87v4.85h2.63v.81zM33.51 1.51c0-.3.23-.52.54-.52.31 0 .54.23.54.52 0 .29-.23.51-.54.51-.3 0-.54-.22-.54-.51zm.13 1.26h.83v4.27h-.83V2.77zM37.37 2.69c.95 0 1.57.45 1.65 1.2h-.8c-.08-.31-.38-.51-.85-.51s-.83.22-.83.55c0 .26.22.42.68.52l.7.17c.8.19 1.19.54 1.19 1.16 0 .8-.75 1.34-1.76 1.34-1 0-1.67-.45-1.74-1.21h.84c.1.33.41.53.92.53.52 0 .9-.23.9-.57 0-.26-.2-.42-.63-.52l-.74-.18c-.8-.19-1.18-.56-1.18-1.19 0-.76.69-1.29 1.65-1.29zM41.33 1.71v1.08h.92v.71h-.92v2.2c0 .44.18.64.6.64.13 0 .2 0 .32-.02v.7c-.14.03-.3.05-.46.05-.93 0-1.3-.33-1.3-1.16v-2.4h-.67v-.72h.67V1.71h.84zM46.89 5.89c-.2.76-.87 1.23-1.84 1.23-1.21 0-1.96-.83-1.96-2.2 0-1.36.76-2.23 1.96-2.23 1.18 0 1.89.81 1.89 2.15v.3h-3v.04c.03.75.46 1.23 1.13 1.23.51 0 .86-.19 1.01-.52h.8zm-2.95-1.38h2.15c-.02-.67-.43-1.1-1.05-1.1-.62 0-1.05.44-1.1 1.1zM48.06 2.77h.8v.68h.07c.2-.47.62-.76 1.26-.76.95 0 1.47.57 1.47 1.59v2.76h-.84V4.5c0-.69-.3-1.03-.91-1.03-.62 0-1.02.42-1.02 1.08v2.5h-.83V2.77zM55.04 4.9c0-1.37.76-2.21 2-2.21 1.23 0 2 .84 2 2.22 0 1.38-.77 2.21-2 2.21-1.25 0-2-.83-2-2.21zm3.13 0c0-.92-.41-1.46-1.13-1.46-.73 0-1.14.54-1.14 1.47 0 .93.4 1.47 1.14 1.47.72 0 1.13-.55 1.13-1.47zM60.15 2.77h.8v.68h.07c.2-.47.63-.76 1.27-.76.94 0 1.46.57 1.46 1.59v2.76h-.83V4.5c0-.69-.3-1.03-.92-1.03-.62 0-1.01.42-1.01 1.08v2.5h-.84V2.77zM35.78 19.07H31.4l-1.05 3.13h-1.86l4.16-11.6h1.93l4.16 11.6h-1.9l-1.05-3.13zm-3.93-1.45h3.48l-1.72-5.1h-.05l-1.71 5.1zM47.71 17.97c0 2.63-1.4 4.32-3.5 4.32-1.2 0-2.15-.54-2.65-1.48h-.04V25H39.8V13.74h1.67v1.4h.03c.48-.9 1.5-1.49 2.68-1.49 2.13 0 3.53 1.7 3.53 4.32zm-1.77 0c0-1.71-.88-2.84-2.22-2.84-1.32 0-2.2 1.15-2.2 2.84 0 1.7.88 2.85 2.2 2.85 1.34 0 2.22-1.12 2.22-2.85zM56.96 17.97c0 2.63-1.4 4.32-3.5 4.32-1.2 0-2.16-.54-2.65-1.48h-.04V25h-1.72V13.74h1.66v1.4h.04c.48-.9 1.5-1.49 2.67-1.49 2.13 0 3.54 1.7 3.54 4.32zm-1.77 0c0-1.71-.88-2.84-2.22-2.84-1.32 0-2.2 1.15-2.2 2.84 0 1.7.88 2.85 2.2 2.85 1.34 0 2.22-1.12 2.22-2.85zM58.35 10.6h1.73v11.6h-1.73V10.6zM69.06 19.72c-.24 1.53-1.72 2.59-3.62 2.59-2.44 0-3.96-1.65-3.96-4.3s1.52-4.37 3.89-4.37c2.32 0 3.78 1.6 3.78 4.17v.6h-5.93v.1c0 1.45.9 2.4 2.26 2.4.96 0 1.7-.46 1.94-1.2h1.64zm-5.83-2.53h4.2c-.04-1.3-.87-2.15-2.06-2.15-1.2 0-2.06.87-2.14 2.15zM78.33 10.6c2.24 0 3.8 1.55 3.8 3.8a3.67 3.67 0 01-3.85 3.84H75.8v3.96h-1.78V10.6h4.31zm-2.53 6.13h2.06c1.55 0 2.44-.85 2.44-2.31 0-1.47-.89-2.3-2.44-2.3H75.8v4.6zM82.76 17.97c0-2.66 1.55-4.33 3.98-4.33 2.44 0 3.99 1.67 3.99 4.33 0 2.67-1.55 4.34-3.99 4.34-2.44 0-3.98-1.67-3.98-4.34zm6.2 0c0-1.82-.82-2.9-2.22-2.9-1.4 0-2.23 1.08-2.23 2.9 0 1.84.83 2.9 2.23 2.9s2.23-1.06 2.23-2.9zM91.94 17.97c0-2.61 1.42-4.32 3.5-4.32 1.21 0 2.16.57 2.64 1.5h.04V10.6h1.73v11.6h-1.68v-1.44h-.03a2.86 2.86 0 01-2.68 1.53c-2.1 0-3.52-1.7-3.52-4.32zm1.76 0c0 1.74.88 2.85 2.22 2.85 1.33 0 2.21-1.13 2.21-2.85 0-1.7-.88-2.84-2.21-2.84-1.34 0-2.22 1.12-2.22 2.84zM107.19 16.65c-.16-.89-.85-1.56-1.98-1.56-1.33 0-2.2 1.12-2.2 2.88 0 1.8.88 2.89 2.21 2.89 1.07 0 1.77-.54 1.97-1.52h1.66c-.2 1.78-1.6 2.97-3.64 2.97-2.4 0-3.96-1.65-3.96-4.34 0-2.63 1.56-4.33 3.94-4.33 2.16 0 3.5 1.36 3.64 3.01h-1.64zM109.9 19.8c0-1.48 1.13-2.38 3.12-2.5l2.3-.12v-.65c0-.94-.61-1.47-1.66-1.47-.95 0-1.63.46-1.76 1.2h-1.61c.04-1.54 1.46-2.62 3.42-2.62 2 0 3.33 1.1 3.33 2.76v5.8h-1.65v-1.39h-.04a3 3 0 01-2.65 1.54c-1.65 0-2.8-1.03-2.8-2.55zm5.42-.77v-.65l-2.06.13c-1.04.07-1.62.52-1.62 1.24 0 .74.61 1.22 1.54 1.22 1.2 0 2.14-.84 2.14-1.94zM121.85 13.65c1.86 0 3.2 1.03 3.24 2.53h-1.63c-.07-.75-.7-1.2-1.65-1.2-.94 0-1.56.43-1.56 1.09 0 .5.41.84 1.28 1.06l1.42.33c1.69.4 2.33 1.03 2.33 2.27 0 1.53-1.44 2.58-3.5 2.58-1.97 0-3.3-1.03-3.43-2.57h1.7c.13.81.77 1.25 1.82 1.25 1.03 0 1.68-.43 1.68-1.1 0-.53-.32-.8-1.2-1.03l-1.5-.37c-1.52-.37-2.29-1.15-2.29-2.33 0-1.5 1.34-2.51 3.3-2.51zM129.03 11.74v2h1.6v1.38h-1.6v4.66c0 .72.31 1.06 1.02 1.06.17 0 .45-.02.56-.04v1.37c-.19.05-.57.08-.95.08-1.7 0-2.37-.64-2.37-2.28v-4.85h-1.22v-1.38h1.22v-2h1.73zM135.26 13.65c1.86 0 3.2 1.03 3.23 2.53h-1.62c-.07-.75-.7-1.2-1.66-1.2-.93 0-1.56.43-1.56 1.09 0 .5.42.84 1.29 1.06l1.41.33c1.7.4 2.33 1.03 2.33 2.27 0 1.53-1.43 2.58-3.49 2.58-1.98 0-3.3-1.03-3.44-2.57h1.71c.12.81.77 1.25 1.81 1.25 1.03 0 1.68-.43 1.68-1.1 0-.53-.32-.8-1.2-1.03l-1.5-.37c-1.51-.37-2.28-1.15-2.28-2.33 0-1.5 1.33-2.51 3.29-2.51zM23.23 20.38a4.97 4.97 0 01-3.13 2.83c-.75.23-1.68.3-2.82.3H6.77a10.1 10.1 0 01-2.82-.3A4.88 4.88 0 01.8 20.38a9.28 9.28 0 01-.46-3.33V6.47c0-.84 0-2.17.46-3.34A4.97 4.97 0 013.95.3C4.7.08 5.62 0 6.77 0h10.5c1.15 0 2.08.08 2.83.3a4.88 4.88 0 013.13 2.83c.46 1.17.47 2.5.47 3.34v10.58c0 .83 0 2.16-.47 3.33zm-9.51-6.87a2.33 2.33 0 00-1.7-.6c-.72 0-1.34.23-1.69.6-.18.2-.28.4-.3.68-.07.55-.03 1.02.03 1.78.06.72.18 1.68.33 2.66.1.7.2 1.07.27 1.34.13.44.61.82 1.36.82.76 0 1.24-.38 1.37-.82.08-.27.16-.64.27-1.34.15-.98.27-1.94.33-2.66.06-.76.1-1.23.04-1.78a1.08 1.08 0 00-.31-.68zm-3.6-3.31c0 1.06.85 1.92 1.9 1.92a1.92 1.92 0 000-3.85c-1.05 0-1.9.87-1.9 1.93zM12 2.6a8.28 8.28 0 00-2.7 16.07c.09.03.17-.03.15-.11l-.11-.85a.28.28 0 00-.17-.22 7.22 7.22 0 012.8-13.83 7.22 7.22 0 012.92 13.82.28.28 0 00-.17.23l-.12.85c-.01.08.06.14.14.12A8.28 8.28 0 0012 2.6zm-.15 3.8a4.47 4.47 0 013.22 7.74.34.34 0 00-.1.27c.01.31 0 .6-.01.95 0 .09.1.14.16.1a5.55 5.55 0 00-3.3-10.12 5.54 5.54 0 00-2.88 10.11.1.1 0 00.16-.1 7.98 7.98 0 010-.94c0-.1-.04-.2-.11-.27a4.48 4.48 0 012.86-7.74z"
        />
    </svg>
);

AppleLogo.propTypes = {
    color: PropTypes.string,
};

export default AppleLogo;
