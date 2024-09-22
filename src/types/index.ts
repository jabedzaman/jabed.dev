export type Article = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  keywords: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  keywords: string[];
  url: string;
  image: string;
  github?: string;
};
