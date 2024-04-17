import { Work } from "~/types/work";

export const works: Work[] = [
  {
    role: "Software Developer Engineer (SDE)",
    type: "Internship",
    start: { year: 2023, month: "December" },
    isCurrent: true,
    company: {
      name: "dipEAT Foods Pvt. Ltd.",
      url: "https://play.google.com/store/apps/details?id=com.dipeat",
      location: "Remote",
    },
    description:
      "Building an android app to pre order food from local restaurants with dine-in and take-away options. Helping the company to scale and reach more customers by setting up a scalable architecture.",
    points: [
      "Revamping the legacy django backend to a modern Node.js backend improving the performance by 30%.",
      "Building the customer and restaurant app from scratch using React Native giving a seamless experience to the users.",
      "Implementing Google Maps API to show the restaurants, distance, and ETA to the user.",
      "Wrote CI/CD pipelines to automate the deployment process and deploy to azure web services",
    ],
    skills: [
      "React Native",
      "Nest.js",
      "PostgreSQL",
      "Azure DevOps",
      "Google Maps API",
      "System Design",
    ],
  },
  {
    role: "Software Developer Engineer (SDE)",
    type: "Internship",
    start: { year: 2023, month: "December" },
    isCurrent: false,
    end: { year: 2024, month: "January" },
    company: {
      name: "GupShupp (OmegleMe)",
      url: "https://omegleapp.me/",
      location: "Remote",
    },
    description:
      "Developed a real-time chat application where users can chat with strangers anonymously.",
    points: [
      "Used WebSockets to create a real-time chat experience.",
      "Worked on a react native frontend and implemented the chat feature.",
      "Used tranformer.js to shadow ban users based on sentiment analysis.",
    ],
    skills: [
      "React",
      "Node.js",
      "WebSockets",
      "Transformer.js",
      "Machine Learning",
    ],
  },
];
