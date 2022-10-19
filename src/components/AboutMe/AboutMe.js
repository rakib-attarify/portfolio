import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        A result-driven individual with a passion for fine aromas. I hail from
        Barishal, which is located in the souther part of Bangladesh. I studied
        Physics, Chemistry, Biology as my academic studies. Currently, I am
        working at Attarify to serve our customer's need.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
