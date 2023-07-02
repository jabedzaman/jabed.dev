import "dotenv/config";
import { axiosClient } from "../helpers/axios_client";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const getAccessToken = async () => {
  const { data } = await axiosClient.post(
    "https://accounts.spotify.com/api/token",
    null,
    {
      params: {
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_SECRET,
      },
    }
  );
  return data;
};


export const spotifyService = {
    getSpotifyStats: async () => {
        const { access_token } = await getAccessToken();
        const { data } = await axiosClient.get(
            "https://api.spotify.com/v1/me/top/tracks",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        return data;
    }
};
