import * as envalid from "envalid";

export const spotifyConfig = envalid.cleanEnv(process.env, {
  SPOTIFY_CLIENT_ID: envalid.str(),
  SPOTIFY_CLIENT_SECRET: envalid.str(),
  SPOTIFY_REFRESH_TOKEN: envalid.str(),
});
