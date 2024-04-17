import * as envalid from "envalid";

export const redisConfig = envalid.cleanEnv(process.env, {
  REDIS_URL: envalid.str(),
});
