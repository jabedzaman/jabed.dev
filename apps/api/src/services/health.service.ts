// import { readFileSync } from "fs";
// import { join } from "path";
// import maxmind, { type CityResponse } from "maxmind";

/*
const dirname = join(process.cwd(), "apps/api/public");
const db = readFileSync(join(dirname, "GeoLite2-City.mmdb"));

const getCity = (ip: string) => {
  const lookup = maxmind
    .open<CityResponse>(db as unknown as string)
    .then((lookup) => {
      return lookup.get(ip);
    });
  return lookup;
};
*/

export const health = async (ip: string, version: string) => {
  return {
    app: "@jabed.dev/api",
    status: "up",
    version: version,
    ip: ip,
    // location: getCity(ip),
  };
};
