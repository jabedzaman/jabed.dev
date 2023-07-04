import "dotenv/config";
import { axiosClient } from "~/helpers/axios_client";

export const youtubeService = {
  getVideos: async () => {
    const response = await axiosClient.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=50&order=date&type=video&key=${process.env.GOOGLE_API_KEY}`
    );
    return {
      regionCode: response.data.regionCode,
      total: response.data.pageInfo.totalResults,
      items: response.data.items,
    };
  },

  getStats: async () => {
    const response = await axiosClient.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.GOOGLE_API_KEY}`
    );
    return {
      viewCount: response.data.items[0].statistics.viewCount,
      subscriberCount: response.data.items[0].statistics.subscriberCount,
      videoCount: response.data.items[0].statistics.videoCount,
    };
  },
};
