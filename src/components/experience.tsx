import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline></VerticalTimeline>
    </section>
  );
}
