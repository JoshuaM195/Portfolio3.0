import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EmpowerImg from "../../public/Images/Empower.png";
import LangportalImg from "../../public/Images/Langportal.png";
import DLTrackerImg from "../../public/Images/DLTracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Texas at Dallas",
    location: "Dallas, TX",
    description:
      "I am graduating with a Bachelor's in Information Technology Systems. I'm learning the fundamentals of software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Resi Media - Software Engieer Intern",
    location: "Dallas, TX",
    description:
      "I worked as a full-stack developer for a startup. Contributed to the development of the Resi Studio, a RTMP streaming service utilized by over 5000+ non profits.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Fannie Mae - Software Engieer Intern",
    location: "Dallas, TX",
    description:
      "I am working as back-end developer for the multi-family team. I am working on an app that will help automate the process of underwriting loans.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Empower",
    description:
      "I worked as a full-stack developer on this project. Helps mute and deaf people express themselves to the world.",
    tags: ["React Native", "AWS", "MongoDB", "Express", "Expo"],
    imageUrl: EmpowerImg,
  },
  {
    title: "Langportal",
    description:
      "Language translator using NLP. As a back-end developer, I trained a LLM with Hugging Face, hosted it on SageMaker, and connected it to our front end on Amplify.",
    tags: ["Next.js", "TypeScript", "AWS", "Tailwind", "PyTorch"],
    imageUrl: LangportalImg,
  },
  {
    title: "Deadlift Tracker",
    description:
      "I utalized OpenCV and MediaPipe to detect human bodies on a camera. The app tracked the users position and counted valid repetitions of deadlifts.",
    tags: ["Python", "OpenCV", "Pandas", "NumPY"],
    imageUrl: DLTrackerImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
