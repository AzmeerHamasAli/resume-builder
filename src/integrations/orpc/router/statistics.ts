import z from "zod";

import { publicProcedure } from "../context";
import { statisticsService } from "../services/statistics";

const userRouter = {
  getCount: publicProcedure
    .route({
      method: "GET",
      path: "/statistics/users",
      tags: ["Platform Statistics"],
      operationId: "getUserCount",
      summary: "Get total number of users",
      description:
        "Returns the total number of registered users on this this instance. The count is cached for up to 6 hours for performance. No authentication required.",
      successDescription: "The total number of registered users.",
    })
    .output(z.number().describe("The total number of registered users."))
    .handler(async (): Promise<number> => {
      return await statisticsService.user.getCount();
    }),
};

const resumeRouter = {
  getCount: publicProcedure
    .route({
      method: "GET",
      path: "/statistics/resumes",
      tags: ["Platform Statistics"],
      operationId: "getResumeCount",
      summary: "Get total number of resumes",
      description:
        "Returns the total number of resumes created on this this instance. The count is cached for up to 6 hours for performance. No authentication required.",
      successDescription: "The total number of resumes created.",
    })
    .output(z.number().describe("The total number of resumes created."))
    .handler(async (): Promise<number> => {
      return await statisticsService.resume.getCount();
    }),
};

const githubRouter = {
  getStarCount: publicProcedure
    .route({
      method: "GET",
      path: "/statistics/github/stars",
      tags: ["Platform Statistics"],
      operationId: "getGitHubStarCount",
      summary: "Get GitHub star count",
      description:
        "Returns a cached GitHub star count for the upstream project repository. No authentication required.",
      successDescription: "GitHub star count for the upstream repository.",
    })
    .output(z.number().describe("The number of GitHub stars."))
    .handler(async (): Promise<number> => {
      return await statisticsService.github.getStarCount();
    }),
};

export const statisticsRouter = {
  user: userRouter,
  resume: resumeRouter,
  github: githubRouter,
};
