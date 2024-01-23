"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {index === 1 ? (
              <ComputerProject {...project} />
            ) : (
              <PhoneProject {...project} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = typeof projectsData[number];

function PhoneProject({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        className="relative w-[250px] h-[500px] mx-auto md:mx-0 md:absolute right-5 top-5 md:w-[300px] md:h-[600px] bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden"
        whileHover={{ y: -190 }} // Adjust this value as needed to control how much the frame moves up
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-0 right-0 h-5 bg-gray-200 rounded-t-lg"></div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute rounded-t-lg shadow-2xl"
        />
      </motion.div>
    </section>
  );
}

function ComputerProject({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
