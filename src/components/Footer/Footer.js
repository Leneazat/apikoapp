import { observer } from "mobx-react";
import React from "react";
import { FooterContainer, FooterContent } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>Copyright © 2017. Privacy Policy.</FooterContent>
    </FooterContainer>
  );
};

export default observer(Footer);
