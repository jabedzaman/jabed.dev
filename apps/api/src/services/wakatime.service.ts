import { axiosClient } from "~/helpers/axios_client";
import "dotenv/config";

export const wakatimeService = async () => {
  const { data } = await axiosClient.get(
    "https://wakatime.com/api/v1/users/current?api_key=" +
      process.env.WAKATIME_API_KEY
  );
  const { data: stats } = await axiosClient.get(
    "https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=" +
      process.env.WAKATIME_API_KEY
  );
  return {
    id: data.data.id,
    username : data.data.username,
    last_heartbeat: data.data.last_heartbeat_at,
    last_coded_in: data.data.last_plugin_name,
    profile_url: data.data.profile_url,
    last_project: data.data.last_project,
    total_coding_hours: stats.data.text,
  };
};
