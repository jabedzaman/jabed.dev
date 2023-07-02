import { axiosClient } from "../helpers/axios_client";
import "dotenv/config";

export const gitlabService = {
  getStats: async () => {
    const { data } = await axiosClient.get(`https://gitlab.com/api/v4/user`,
        {
            headers: {
                "PRIVATE-TOKEN": process.env.GITLAB_ACCESS_TOKEN,
            },
        }
    );
    return data;
    },
};
