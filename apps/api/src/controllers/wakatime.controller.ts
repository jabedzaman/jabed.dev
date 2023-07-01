import { WakatimeService } from "../services/wakatime.service";
import { Request, Response } from "express";

export const wakatime = async (_: Request, res: Response) => {
  const wakatimeService = new WakatimeService();
  const wakatimeStats = await wakatimeService.getWakatimeStats();
  const wakatimeCodeStatesAllTime =
    await wakatimeService.getWakatimeCodeStatesAllTime();
  const wakatimeCodeStatsLast7Days =
    await wakatimeService.getWakatimeCodeStatsLast7Days();
  const wakatimeLanguageUsageInLast7Days =
    await wakatimeService.getWakatimeLanguageUsageInLast7Days();
  res.json({
    wakatimeStats,
    wakatimeCodeStatesAllTime,
    wakatimeCodeStatsLast7Days,
    wakatimeLanguageUsageInLast7Days,
  });
};
