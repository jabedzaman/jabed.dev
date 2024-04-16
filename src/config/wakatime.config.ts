import * as envalid from 'envalid';

export const wakatimeConfig = envalid.cleanEnv(process.env, {
  WAKATIME_API_KEY: envalid.str(),
});
