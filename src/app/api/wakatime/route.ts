import { wakatimeConfig } from "~/config";

export async function GET() {
  const response = await fetch(
    "https://wakatime.com/api/v1/users/current?api_key=" +
      wakatimeConfig.WAKATIME_API_KEY
  );
  const allTimeResponse = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=" +
      wakatimeConfig.WAKATIME_API_KEY
  );
  const data = await response.json();
  const allTimeData = await allTimeResponse.json();
  return new Response(
    JSON.stringify({
      id: data.data.id,
      username: data.data.username,
      last_heartbeat: data.data.last_heartbeat_at,
      last_coded_in: data.data.last_plugin_name,
      profile_url: data.data.profile_url,
      last_project: data.data.last_project,
      total_coding_hours: allTimeData.data.text,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
