import { Metadata } from "next";
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="2"
          y="4"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 16h20M6 20h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "iPhone 16 128GB",
    description: "primary mobile device",
    link: "https://www.apple.com/iphone-16/",
    category: "hardware",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="6"
          y="2"
          width="12"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "AirPods Pro 2nd Gen",
    description: "wireless earbuds for music and calls",
    link: "https://www.apple.com/airpods-pro/",
    category: "hardware",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M9 3v7a3 3 0 01-3 3H5a2 2 0 00-2 2v5m12-17v7a3 3 0 003 3h1a2 2 0 012 2v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Acer SA222Q 21.5" Monitor',
    description: "external monitor for extended screen space",
    link: "https://www.acer.com/",
    category: "hardware",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8m-4-4v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Samsung 980 Pro 512GB SSD",
    description: "high-speed external storage",
    link: "https://www.samsung.com/",
    category: "hardware",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 10h10M7 14h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Orico SSD Enclosure",
    description: "enclosure for external SSD",
    link: "https://www.orico.cc/",
    category: "hardware",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Visual Studio Code",
    description: "code editor for development",
    link: "https://code.visualstudio.com/",
    category: "software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M16 3l5 4v10l-5 4-11-7v-4l11-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M5 10l11 7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Google Chrome",
    description: "web browser for development and browsing",
    link: "https://www.google.com/chrome/",
    category: "software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 3v6m0 6v6M3 12h6m6 0h6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Discord",
    description: "communication platform for teams",
    link: "https://discord.com/",
    category: "software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M8 12h.01M16 12h.01M21 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    description: "React framework for building web applications",
    link: "https://nextjs.org/",
    category: "framework",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.5 0a11.5 11.5 0 100 23 11.5 11.5 0 000-23zm5.3 18.1l-5.2-8.3v8.3h-1.8V4.9h1.7l5.3 8.4V4.9h1.8v13.2h-1.8z" />
      </svg>
    ),
  },
  {
    name: "Spacemail",
    description: "email service for custom domains",
    link: "https://spacemail.io/",
    category: "service",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 7l9 6 9-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Linear",
    description: "issue tracking and project management",
    link: "https://linear.app/",
    category: "service",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M3 3l18 18M3 21l7-7m4-4l7-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
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
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
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
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
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
