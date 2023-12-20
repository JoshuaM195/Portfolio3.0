import React from "react";

export default function About() {
  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <h2 className="text-3x1 capitalize mb-8" style={{ fontWeight: 600 }}>
        About me
      </h2>
      <p className="mb-3">
        Hello! I'm{" "}
        <span className="font-medium" style={{ fontWeight: 600 }}>
          Joshua Mathew
        </span>
        , a software engineering student at the{" "}
        <span className="italic">University of Texas at Dallas</span>, based in
        the heart of Dallas. My journey in tech has just begun, and I'm excited
        to deeply immerse myself in learning and crafting innovative software
        solutions.
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
    </section>
  );
}
