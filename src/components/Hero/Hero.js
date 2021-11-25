import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { Footer } from '../Footer/Footer';
import { FooterWrapper } from '../Footer/FooterStyles';
import { LinkColumn, LinkItem, LinkTitle } from '../Footer/FooterStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I am Ayeman
        </SectionTitle>
        <SectionText>
          I am a front-end developer with experience in HTML, CSS, JavaScript, <u><strong>React</strong></u>, Nextjs, Python (proficient)
        </SectionText>
        <LinkColumn>
          <h2>Hire me : </h2>
          <LinkItem href="mailto:ayemanbsalauddin@gmail.com">
            ayemanbsalauddin@gmail.com
          </LinkItem>
          <LinkItem href="tel:+8801710129029">+88-01710-129029</LinkItem>
        </LinkColumn>
      </LeftSection> 
      
      
      
    </Section>
  </>
);

export default Hero;
