import * as envalid from "envalid";

const config = envalid.cleanEnv(process.env, {
  GITHUB_ACCESS_TOKEN: envalid.str(),
});

const username = "jabedzaman";

export const githubConfig = {
  ...config,
  username,
};
