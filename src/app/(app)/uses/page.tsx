import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Uses" };

export default function Page() {
  return (
    <div className="text-gray-800 space-y-4 leading-snug break-words">
      <h1 className="font-semibold text-lg">My Minimal Setup</h1>
      <div className="w-full border-t" />
      <div className="space-y-2">
        <h2>Hardware:</h2>
        <ul className="space-y-2">
          {hardware.map((item) => (
            <li key={item.title}>
              •{" "}
              <Link
                href={item.link}
                target="_blank"
                className="hover:underline duration-150 ease-in-out"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>{" "}
              - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full border-t" />
      <div className="space-y-2">
        <h2>Software:</h2>
        <ul className="space-y-2">
          {software.map((item) => (
            <li key={item.title}>
              •{" "}
              <Link
                href={item.link}
                target="_blank"
                className="hover:underline duration-150 ease-in-out"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>{" "}
              - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full border-t" />
      <div className="space-y-2">
        <h2>Homelab:</h2>
        <ul className="space-y-2">
          {homelab.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="w-full border-t" />
      <p>
        Most of the software development tools are installed on my vps. I prefer
        to keep my local machine clean and minimal. When needed, I use to ssh to
        my vps and do the task such as running a unkown software, building a
        project, testing a new sdk etc.
      </p>
    </div>
  );
}

const hardware: { title: string; description: string; link: string }[] = [
  {
    title: "Macbook Air M2 (2022) 16/256GB",
    description: "my main workstation",
    link: "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-midnight-apple-m2-chip-with-8-core-cpu-and-8-core-gpu-16gb-memory-256gb",
  },
  {
    title: "iPhone 16 128GB",
    description: "primary phone",
    link: "https://www.apple.com/shop/buy-iphone/iphone-16-128gb",
  },
  {
    title: "Galaxy S23",
    description: "secondary phone",
    link: "https://www.samsung.com/in/smartphones/galaxy-s23/",
  },
  {
    title: "Acer SA222Q 21.5-inch Full HD IPS Monitor",
    description: "works as a secondary monitor",
    link: "https://store.acer.com/en-in/acer-sa222q-led-backlight-lcd-monitor-with-54-61-cm-21-5-full-hd-ips-ultra-slim-7-2mm-thick-zero-frame-display-250-nits-100hz-refresh-1-ms-vrb-white-um-ws2si-e01",
  },
  {
    title: "Airpods 2nd Gen",
    description: "I use this for music and calls",
    link: "https://www.apple.com/shop/product/MQJY3HN/AirPods-2nd-generation",
  },
  {
    title: "Samsung 980 Pro 512GB NVMe M.2 SSD",
    description: "256GB is not enough, so I use this as an external drive",
    link: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/980-pro-pcie-4-0-nvme-ssd-1tb-mz-v8p1t0b-am/",
  },
  {
    title: "ORICO Aluminum M.2 NVMe SSD Enclosure",
    description: "to use the SSD as an external drive",
    link: "https://www.amazon.com/ORICO-NVMe-Thunderbolt-Compatible-SSDs-PWM2-BK/dp/B0BJ23JTXX?th=1",
  },
];

const software: { title: string; description: string; link: string }[] = [
  {
    title: "vscode",
    description: "the extension support is amazing",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Xcode",
    description: "slower than a snail but I have to use it for iOS development",
    link: "https://developer.apple.com/xcode/",
  },
  {
    title: "Brave Browser",
    description: "the privacy it offers, made me stick to it",
    link: "https://brave.com/",
  },
  {
    title: "Spotify",
    description:
      "I can't live without music, FYI my 2024 wrapped came out with 100k+ minutes",
    link: "https://www.spotify.com/",
  },
  {
    title: "Discord",
    description: "for chatting with friends & professional work",
    link: "https://discord.com/",
  },
];

const homelab: string[] = [
  "Ubuntu Server 24.04 LTS",
  "4 Core Ampere Arm CPU",
  "24GB RAM",
  "200GB NVMe SSD",
];
