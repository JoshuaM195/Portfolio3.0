"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello! I'm{" "}
        <span className="font-medium" style={{ fontWeight: 600 }}>
          Joshua Mathew
        </span>
        , a software engineering student at the{" "}
        <span className="italic">University of Texas at Dallas</span>. My
        journey in tech has just begun, and I'm excited to deeply immerse myself
        in learning and crafting innovative software solutions.
      </p>
      <p className="mb-3">
        Through my internships and academic projects, I've been honing my skills
        in <span style={{ fontWeight: 600 }}>Python, Java, and JavaScript</span>
        , and delving into frameworks like{" "}
        <span style={{ fontWeight: 600 }}>React and Next.js</span>. I'm
        especially intrigued by{" "}
        <span className="italic">back-end development</span> and how systems
        operate behind the scenes.
      </p>
      <p className="mb-3">
        I'm always eager to connect with fellow tech enthusiasts and
        professionals. My goal is to continuously learn, contribute, and
        eventually transition into a full-time role where I can apply and expand
        my knowledge further.
      </p>
    </motion.section>
  );
}
