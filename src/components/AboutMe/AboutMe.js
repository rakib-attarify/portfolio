import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am Ayeman B. Salauddin. I am looking for a opportunity to gain experience, learn new things and to contribute.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
