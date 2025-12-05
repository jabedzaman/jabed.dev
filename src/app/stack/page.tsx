import { DiscIcon, MailIcon, MonitorIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stack",
  description:
    "my gear, tools, and technologies i use to craft digital artifacts.",
};

const artifacts: {
  name: string;
  description: string;
  link: string;
  category: "hardware" | "software" | "framework" | "service";
  icon: React.ReactNode;
}[] = [
  {
    name: "MacBook Air M2 16/256GB",
    description: "primary workstation machine",
    link: "https://www.apple.com/macbook-air-m2/",
    category: "hardware",
    icon: <Image src="/icons/apple.svg" alt="Apple" width={32} height={32} />,
  },
  {
    name: "iPhone 16 128GB",
    description: "primary mobile device",
    link: "https://www.apple.com/iphone-16/",
    category: "hardware",
    icon: <Image src="/icons/apple.svg" alt="Apple" width={32} height={32} />,
  },
  {
    name: "AirPods Pro 2nd Gen",
    description: "wireless earbuds for music and calls",
    link: "https://www.apple.com/airpods-pro/",
    category: "hardware",
    icon: <Image src="/icons/apple.svg" alt="AirPods" width={32} height={32} />,
  },
  {
    name: 'Acer SA222Q 21.5" Monitor',
    description: "external monitor for extended screen space",
    link: "https://www.acer.com/",
    category: "hardware",
    icon: <Image src="/icons/acer.svg" alt="Acer" width={32} height={32} />,
  },
  {
    name: "Samsung 980 Pro 512GB SSD",
    description: "high-speed external storage",
    link: "https://www.samsung.com/",
    category: "hardware",
    icon: (
      <Image src="/icons/samsung.svg" alt="Samsung" width={32} height={32} />
    ),
  },
  {
    name: "Visual Studio Code",
    description: "code editor for development",
    link: "https://code.visualstudio.com/",
    category: "software",
    icon: (
      <Image
        src="/icons/vscode.svg"
        alt="Visual Studio Code"
        width={32}
        height={32}
      />
    ),
  },
  {
    name: "Google Chrome",
    description: "web browser for development and browsing",
    link: "https://www.google.com/chrome/",
    category: "software",
    icon: <Image src="/icons/chrome.svg" alt="Chrome" width={32} height={32} />,
  },
  {
    name: "Discord",
    description: "communication platform for teams",
    link: "https://discord.com/",
    category: "software",
    icon: (
      <Image src="/icons/discord.svg" alt="Discord" width={32} height={32} />
    ),
  },
  {
    name: "Next.js",
    description: "React framework for building web applications",
    link: "https://nextjs.org/",
    category: "framework",
    icon: (
      <Image src="/icons/nextjs.svg" alt="Next.js" width={32} height={32} />
    ),
  },
  {
    name: "Spacemail",
    description: "email service for custom domains",
    link: "https://spacemail.io/",
    category: "service",
    icon: (
      <MailIcon
        width={32}
        height={32}
        className="text-neutral-700 dark:text-neutral-300"
      />
    ),
  },
  {
    name: "Linear",
    description: "issue tracking and project management",
    link: "https://linear.app/",
    category: "service",
    icon: <Image src="/icons/linear.svg" alt="Linear" width={32} height={32} />,
  },
];

const categoryLabels = {
  hardware: "Hardware",
  software: "Software",
  framework: "Framework",
  service: "Service",
};

export default function Page() {
  const groupedArtifacts = artifacts.reduce((acc, artifact) => {
    if (!acc[artifact.category]) {
      acc[artifact.category] = [];
    }
    acc[artifact.category].push(artifact);
    return acc;
  }, {} as Record<string, typeof artifacts>);

  return (
    <main className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif">stack.</h1>
        <p className="max-w-2xl">
          my gear, tools, and technologies i use to craft digital artifacts.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedArtifacts).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((artifact) => (
                <Link
                  key={artifact.name}
                  href={artifact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                      {artifact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1 truncate">
                        {artifact.name}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {artifact.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
