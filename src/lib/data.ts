import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EmpowerImg from "../../public/Images/Empower.png";
import LangportalImg from "../../public/Images/Langportal.png";
import DLTrackerImg from "../../public/Images/DLTracker.png";
import UNIFIImg from "../../public/Images/UNIFI.png";
import CodeInsightImg from "../../public/Images/CodeInsight.png";
import DIYCursor from "../../public/Images/DIYCursor.png";

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
      "I worked as back-end developer for the multi-family team. I am working on an app that will help automate the process of underwriting loans.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "UTD Networking Lab - ML Research Assistant",
    location: "Dallas, TX",
    description:
      "Building a zero-day DDoS attack detection model. Working with a professor and a PhD candidate to analyze malicious data flows to enable real-time identification of anomalous traffic patterns.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "DIY Cursor",
    description: "A tool that parses code, stores embeddings in PineconeDB, and uses RAG with DeepSeek to retrieve relevant code, answer questions, and assist with edits",
    tags: ["Python", "Pinecone", "DeepSeek", "SciKit-Learn"],
    imageUrl: DIYCursor,
    isComputerProject: true,
    projectUrl: "https://github.com/JoshuaM195/DIY_Cursor",
  },
  {
    title: "CodeInsight (TreeHacks Winner)",
    description: "A tool that helps understand codebases faster by visualizing function dependencies and integrating an AI for code analysis",
    tags: ["Flask", "JavaScript", "D3", "Groq", "AST"],
    imageUrl: CodeInsightImg,
    isComputerProject: true,
    projectUrl: "https://devpost.com/software/code-insight",
  },
  {
    title: "Empower",
    description: "I worked as a full-stack developer on this project. Helps mute and deaf people express themselves to the world.",
    tags: ["React Native", "AWS", "MongoDB", "Express", "Expo"],
    imageUrl: EmpowerImg,
    isComputerProject: false,
    projectUrl: "https://github.com/acm-projects/Empower",
  },
  {
    title: "Langportal",
    description: "Language translator using NLP. As a back-end developer, I trained a LLM with Hugging Face, hosted it on SageMaker, and connected it to our front end on Amplify.",
    tags: ["Next.js", "TypeScript", "AWS", "Tailwind", "PyTorch"],
    imageUrl: LangportalImg,
    isComputerProject: true,
    projectUrl: "https://github.com/bluestarburst/LangPortal",
  },
  {
    title: "Deadlift Tracker",
    description: "I utilized OpenCV and MediaPipe to detect human bodies on a camera. The app tracked the users position and counted valid repetitions of deadlifts.",
    tags: ["Python", "OpenCV", "Pandas", "NumPY"],
    imageUrl: DLTrackerImg,
    isComputerProject: false,
    projectUrl: "https://github.com/JoshuaM195/Deadlift",
  },
  {
    title: "Unifi",
    description: "AI Powered digital wallet that helps users track their spendings and save money. I worked on the back-end, creating the API and connecting it to the front-end.",
    tags: ["React", "MongoDB", "Express", "Google Vision", "OpenAI"],
    imageUrl: UNIFIImg,
    isComputerProject: true, 
    projectUrl: "https://github.com/IbrahimKhanGH/UniFi",
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
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
