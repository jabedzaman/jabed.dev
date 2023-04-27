export type SiteConfig = {
  title: string;
  description: string;
  openGraph: OpenGraph;
  twitter: {
    title: string;
    creator: string;
  };
};

type OpenGraph = {
  title: string;
  description: string;
  url: string;
  site_name: string;
  locale: string;
};
