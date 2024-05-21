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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
