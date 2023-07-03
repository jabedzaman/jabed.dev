import { axiosClient } from "~/helpers/axios_client";
import "dotenv/config";
import z from "zod";

export interface GitlabProject {
  name: z.ZodString;
  description: z.ZodString;
  created_at: z.ZodString;
  web_url: z.ZodString;
  forks_count: z.ZodNumber;
  star_count: z.ZodNumber;
  visibility: z.ZodString;
}

export const gitlabService = {
  getStats: async () => {
    const { data } = await axiosClient.get(`https://gitlab.com/api/v4/user/`, {
      headers: {
        "PRIVATE-TOKEN": process.env.GITLAB_ACCESS_TOKEN,
      },
    });
    return {
      id: data.id,
      username: data.username,
      name: data.name,
      avatar_url: data.avatar_url,
      web_url: data.web_url,
      bio: data.bio,
      location: data.location,
      organization: data.organization,
    };
  },

  getProjects: async () => {
    const { data } = await axiosClient.get(
      `https://gitlab.com/api/v4/users/jabedzaman/projects`,
      {
        headers: {
          "PRIVATE-TOKEN": process.env.GITLAB_ACCESS_TOKEN,
        },
      }
    );
    return {
      projects: data
        //   @ts-ignore
        .filter((project: GitlabProject) => project.visibility === "public")
        .map((project: GitlabProject) => ({
          name: project.name,
          description: project.description,
          created_at: project.created_at,
          web_url: project.web_url,
          forks_count: project.forks_count,
          star_count: project.star_count,
          visibility: project.visibility,
        })),
    };
  },
};
