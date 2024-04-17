export type Work = {
  role: string;
  type: "Full-time" | "Part-time" | "Internship";
  start: {
    year: number;
    month:
      | "January"
      | "February"
      | "March"
      | "April"
      | "May"
      | "June"
      | "July"
      | "August"
      | "September"
      | "October"
      | "November"
      | "December";
  };
  isCurrent: boolean;
  end?: {
    year: number;
    month:
      | "January"
      | "February"
      | "March"
      | "April"
      | "May"
      | "June"
      | "July"
      | "August"
      | "September"
      | "October"
      | "November"
      | "December";
  };
  company: {
    name: string;
    url: string;
    location: string;
  };
  description: string;
  points: string[];
  skills: string[];
};
