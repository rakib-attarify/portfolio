import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skill</SectionTitle>
    <SectionText>
      As a team-member of a fast growing company, my responsibilities grew
      significantly. Here are some of expertise :
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Attarify</ListTitle>
          <ListParagraph>
            Leadership, Team-player, Excellent Communicator, Management <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Familiar with <br />
            Python and Django
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
