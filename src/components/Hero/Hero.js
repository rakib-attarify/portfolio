import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

import { LinkColumn, LinkItem, LinkTitle } from "../Footer/FooterStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />I am Rakib Hassan
        </SectionTitle>
        <SectionText>
          I am the COO of Attarify, a mission-driven Ecommerce (Retail) startup{" "}
        </SectionText>
        <br />
        <LinkColumn>
          <h2>Contact me : </h2>
          {/* <LinkItem href="">
            @gmail.com
          </LinkItem> */}
          <LinkItem href="tel:+8801893546089">+880 1893-546089</LinkItem>
        </LinkColumn>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
