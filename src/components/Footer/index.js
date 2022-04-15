import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> O NAMA </FooterLinkTitle>
              <FooterLink to="about">Više informacija</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> NAŠ TIM </FooterLinkTitle>
              <FooterLink to="contact">Više informacija</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> USLUGE </FooterLinkTitle>
              <FooterLink to="services">Više informacija</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> LOKACIJA </FooterLinkTitle>
              <FooterLink to="location">Više informacija</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">ZGMT</SocialLogo>
            <WebsiteRights>
              Zgmt© {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/Zagrebmuaythai/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/zagrebmuaythai/?hl=en"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/user/zagrebmuaythai"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
