type ProjectProps = {
  id: number;
  name: string;
  description: string;
  forks: number;
  stargazers_count: number;
  language: string;
};

type wakatimeProps = {
  totalHours: number;
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
  wakaTime: number;
};

type statcardProps = {
  stars: number;
  followers: number;
  publicRepos: number;
};

type Message = {
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
