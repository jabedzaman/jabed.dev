import * as React from "react";
import { ipDataConfig, redisConfig } from "~/config";
import axios from "axios";
import { Redis } from "ioredis";

const redis = new Redis(redisConfig.REDIS_URL);

type IpData = {
  ip: string;
  is_eu: boolean;
  city: string;
  region: string;
  region_code: string;
  region_type: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  postal: string;
  calling_code: string;
  flag: string;
  emoji_flag: string;
  emoji_unicode: string;
  asn: {
    asn: string;
    name: string;
    domain: string;
    route: string;
    type: string;
  };
  carrier: {
    name: string;
    mcc: string;
    mnc: string;
  };
  languages: {
    name: string;
    native: string;
    code: string;
  }[];
  currency: {
    name: string;
    code: string;
    symbol: string;
    native: string;
    plural: string;
  };
  time_zone: {
    name: string;
    abbr: string;
    offset: string;
    is_dst: boolean;
    current_time: string;
  };
  threat: {
    is_tor: boolean;
    is_icloud_relay: boolean;
    is_proxy: boolean;
    is_datacenter: boolean;
    is_anonymous: boolean;
    is_known_attacker: boolean;
    is_known_abuser: boolean;
    is_threat: boolean;
    is_bogon: boolean;
    blocklists: string[];
  };
  count: string;
};

export const LastVisit: React.FC = React.memo(async () => {
  const getIpData = React.useCallback(async () => {
    const { data } = await axios.get<IpData>(
      `https://api.ipdata.co?api-key=${ipDataConfig.IPDATA_API_KEY}`
    );
    return data;
  }, []);
  const LastVisit = await redis.get("lastVisit");
  await getIpData().then(async (data) => {
    await redis.set("lastVisit", `${data.region}, ${data.country_name}`);
  });
  return (
    <span className="text-xs text-[#666666]">
      {LastVisit ? `Last visit from ${LastVisit}` : ""}
    </span>
  );
});

LastVisit.displayName = "LastVisit";
