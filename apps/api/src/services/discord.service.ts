import { axiosClient } from "../helpers/axios_client";
import "dotenv/config";

export const discordService = {
  getDiscordStats: async () => {
    const { data } = await axiosClient.get(
      `https://api.lanyard.rest/v1/users/` + process.env.DISCORD_USER_ID,
    );
    return data;
  },

  getDiscordPresence: async () => {
    const { data } = await axiosClient.get(
      `https://lanyard-profile-readme.vercel.app/api/` +
        process.env.DISCORD_USER_ID,
      {
        responseType: "blob",
      }
    );
    return data;
  },
};
