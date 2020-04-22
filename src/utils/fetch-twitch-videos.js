import { get } from './request';
import { TWITCH_HEADERS, TWITCH_VIDEO_URL } from '../constants';

// Fetches videos from twitch api
const fetchTwitchVideos = async (
    videoLimit,
    headers = TWITCH_HEADERS,
    videoURL = TWITCH_VIDEO_URL
) => {
    try {
        if (videoLimit) {
            videoURL = TWITCH_VIDEO_URL + '&first=' + videoLimit;
        }
        const videoResp = await get(videoURL, headers);
        // return the whole array of videos, but ignore pagination for now
        return videoResp.data;
    } catch (error) {
        console.error(error);
    }

    return [];
};

export default fetchTwitchVideos;
