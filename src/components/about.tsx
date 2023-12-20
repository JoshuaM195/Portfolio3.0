import React from "react";

export default function About() {
  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <h2>About me</h2>
      <p className="mb-3">
        Hello! I'm{" "}
        <span className="font-medium" style={{ fontWeight: 600 }}>
          Joshua Mathew
        </span>
        , a software engineering student at the{" "}
        <span className="italic">University of Texas at Dallas</span>, based in
        the heart of Dallas. My journey in tech has just begun, but I'm already
        deeply immersed in learning and crafting innovative software solutions.
        My curiosity about the vast potential of technology drives me to explore
        and grow constantly.
      </p>
      <p>
        Through my internships and academic projects, I've been honing my skills
        in <span style={{ fontWeight: 600 }}>Python, Java, and JavaScript</span>
        , and delving into frameworks like{" "}
        <span style={{ fontWeight: 600 }}>React and Next.js</span>. I'm
        especially intrigued by{" "}
        <span className="italic">back-end development</span> and how systems
        operate behind the scenes. Currently, my learning path is taking me
        towards <span style={{ fontWeight: 600 }}>Cloud technologies</span> and{" "}
        <span className="italic">AI/ML</span>, areas I believe are pivotal in
        the future of software engineering. I'm also getting familiar with{" "}
        <span style={{ fontWeight: 600 }}>TypeScript</span>, which I find
        complements my learning curve well.
      </p>
      <p>
        I'm always eager to connect with fellow tech enthusiasts and
        professionals. My goal is to continuously learn, contribute, and
        eventually transition into a full-time role where I can apply and expand
        my knowledge further.
      </p>
    </section>
  );
}
