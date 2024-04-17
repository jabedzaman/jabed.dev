import * as envalid from "envalid";

export const ipDataConfig = envalid.cleanEnv(process.env, {
  IPDATA_API_KEY: envalid.str(),
});
