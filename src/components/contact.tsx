import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:joshuamathew195@gmail.com">
          joshuamathew195@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </section>
  );
}
