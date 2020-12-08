import {
  Wrapper,
  TopSection,
  BottomSection,
  LogoContainer,
  LinksContainer,
  MobileContainer,
  Logo,
  SocialMediaContainer,
  SocialMediaLink,
  LogoLink,
  LinksListContainer,
  LinksListTitle,
  LinksList,
  MobileTitle,
  MobileParagraph,
  MobileButton,
  MobileButtonsContainer,
} from "./index.style";
import logo from "../../assets/img/logo.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Appstore from "../../assets/svg/Appstore.svg";
import Playstore from "../../assets/svg/Playstore.svg";
import { NavLink } from "../Links";

const Footer = () => {
  return (
    <Wrapper>
      <TopSection>
        <LogoContainer>
          <LogoLink href="#">
            <Logo src={logo} alt="logo" />
          </LogoLink>
          <SocialMediaContainer>
            <SocialMediaLink href="#">
              <Facebook />
            </SocialMediaLink>
            <SocialMediaLink href="#">
              <Instagram />
            </SocialMediaLink>
            <SocialMediaLink href="#">
              <Twitter />
            </SocialMediaLink>
            <SocialMediaLink href="#">
              <Youtube />
            </SocialMediaLink>
            <SocialMediaLink href="#">
              <Facebook />
            </SocialMediaLink>
            <SocialMediaLink href="#">
              <Instagram />
            </SocialMediaLink>
          </SocialMediaContainer>
        </LogoContainer>
        <LinksContainer>
          <LinksListContainer>
            <LinksListTitle>Menu</LinksListTitle>
            <LinksList>
              <NavLink href="#" text="About" />
              <NavLink href="#" text="Contact" />
              <NavLink href="#" text="Pricing" />
              <NavLink href="#" text="Integrations" />
              <NavLink href="#" text="Blog" />
            </LinksList>
          </LinksListContainer>
          <LinksListContainer>
            <LinksListTitle>Important Links</LinksListTitle>
            <LinksList>
              <NavLink href="#" text="Privacy" />
              <NavLink href="#" text="disclaimer" />
              <NavLink href="#" text="F.A.Q" />
              <NavLink href="#" text="Support" />
            </LinksList>
          </LinksListContainer>
        </LinksContainer>
        <MobileContainer>
          <MobileTitle>
            Download Saasly mobile app and start taking notes on the go!
          </MobileTitle>
          <MobileParagraph>
            Enter your email to receive monthly newsletters with updates from
            Saasly team
          </MobileParagraph>
          <MobileButtonsContainer>
            <MobileButton href="#">
              <Appstore />
              App Store
            </MobileButton>
            <MobileButton href="#">
              <Playstore />
              Play Store
            </MobileButton>
          </MobileButtonsContainer>
        </MobileContainer>
      </TopSection>
      <BottomSection></BottomSection>
    </Wrapper>
  );
};

export default Footer;
