type ProjectProps = {
  id: number;
  name: string;
  description: string;
  forks: number;
  stargazers_count: number;
  language: string;
};

type wakatimeProps = {
  totalHours: string;
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

type readmeProps = {
  stars: number;
  followers: number;
  publicRepos: number;
  wakaTime: string;
};

type statcardProps = {
  stars: number;
  followers: number;
  publicRepos: number;
};

type Message = {
  push(arg0: { id: string; }): unknown;
  id: string;
  message: string;
  name: string;
  timestamp: Timestamp;
};

type deviconProps = {
  link: string;
  alt: string;
  src: string;
};

type statsResponsedata = {
  data: {
    data: {
      blogs: blog[];
      followers: number;
      wakatime: string;
      total_stars: number;
      public_repos: number;
      repos: repo[];
    };
  };
  blog: blog[];
};

type repo = {
  id : number;
  name: string;
  description: string;
  stars: number;
};
