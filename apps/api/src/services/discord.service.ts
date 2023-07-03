import { axiosClient } from "~/helpers/axios_client";
import "dotenv/config";

export const discordService = {
  getDiscordStats: async () => {
    const { data } = await axiosClient.get(
      `https://api.lanyard.rest/v1/users/` + process.env.DISCORD_USER_ID
    );
    const active_device = () => {
      let devices = []; //@ts-ignore
      data?.data?.active_on_discord_web && devices.push("Web"); //@ts-ignore
      data?.data?.active_on_discord_mobile && devices.push("Mobile"); //@ts-ignore
      data?.data?.active_on_discord_desktop && devices.push("Desktop"); //@ts-ignore
      devices.length === 0 && devices.push("None");
      return devices;
    };
    return {
      id: data?.data?.discord_user?.id,
      username: data?.data?.discord_user?.username,
      avatar: data?.data?.discord_user?.avatar,
      global_name: data?.data?.discord_user?.global_name,
      display_name: data?.data?.discord_user?.display_name,
      status: data?.data?.discord_status,
      active_device: active_device(),
      listening_to_spotify: data?.data?.listening_to_spotify,
    };
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
