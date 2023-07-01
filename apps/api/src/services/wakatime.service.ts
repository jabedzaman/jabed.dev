import { axiosClient } from "../helpers/axios_client";
import "dotenv/config";

export class WakatimeService {
  public getWakatimeStats = async () => {
    const { data } = await axiosClient.get(
      "https://wakatime.com/api/v1/users/current?api_key=" +
        process.env.WAKATIME_API_KEY
    );
    return data.data;
  };

  public getWakatimeCodeStatesAllTime = async () => {
    const { data } = await axiosClient.get(
      "https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=" +
        process.env.WAKATIME_API_KEY
    );
    return data.data;
  };

  public getWakatimeCodeStatsLast7Days = async () => {
    let { data } = await axiosClient.get(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=" +
        process.env.WAKATIME_API_KEY
    );
    return {
      human_readable_daily_average_including_other_language:
        data.data.human_readable_daily_average_including_other_language,
      human_readable_total_including_other_language:
        data.data.human_readable_total_including_other_language,
    };
  };

  public getWakatimeLanguageUsageInLast7Days = async () => {
    let { data } = await axiosClient.get(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=" +
        process.env.WAKATIME_API_KEY
    );
    return data.data.languages;
  };
}
