import { Spotify } from "@jabedzaman/spotify";

const spotifyConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID || "",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || "",
};

export const spotify = new Spotify(spotifyConfig);
