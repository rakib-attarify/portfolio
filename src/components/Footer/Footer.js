import React from "react";

import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+8801710129029">+880 1893-546089</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          {/* <LinkItem href="mailto:">
            
          </LinkItem> */}
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
