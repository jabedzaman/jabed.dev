import os from "os";

export const healthService = async (ip: string, version: string) => {
  return {
    app: "@jabed.dev/api",
    version: version,
    timestamp: new Date().toISOString(),
    status: "up",
    ip: ip,
    hostname: os.hostname(),
    operatingSystem: os.type(),
    distribution: os.release(),
    uptime: os.uptime(),
    node: process.version,
  };
};
