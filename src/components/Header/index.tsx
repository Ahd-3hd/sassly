import {
  Wrapper,
  NewsletterContainer,
  NewsletterInput,
  NewsletterArrowContainer,
  ArrowImg,
  ArrowLabel,
  HeaderMedia,
  Foreground,
  Background,
  CompaniesContainer,
  CompanyLogo,
} from "./index.style";
import { Heading1, Paragraph } from "../Typography";
import Button from "../Buttons";
import arrowImg from "../../assets/img/newsletterarrow.svg";
import foregroundImg from "../../assets/img/header1.jpg";
import backgroudImg1 from "../../assets/img/header2.svg";
import backgroudImg2 from "../../assets/img/header3.svg";
import company1 from "../../assets/img/company1.svg";
import company2 from "../../assets/img/company2.svg";
import company3 from "../../assets/img/company3.svg";
import company4 from "../../assets/img/company4.svg";
import company5 from "../../assets/img/company5.svg";
const companiesLogos = [company1, company2, company3, company4, company5];
const Header = () => {
  return (
    <Wrapper>
      <Heading1>The Next Generation Notes App</Heading1>
      <Paragraph variant="pLarge">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Paragraph>
      <NewsletterContainer>
        <NewsletterInput
          type="email"
          required
          placeholder="Enter your email here..."
        />
        <Button size="small" primary label="Get Started" />
        <NewsletterArrowContainer>
          <ArrowLabel>Get started for free</ArrowLabel>
          <ArrowImg src={arrowImg} />
        </NewsletterArrowContainer>
      </NewsletterContainer>
      <HeaderMedia>
        <Background src={backgroudImg1} alt="plant" direction="left" />
        <Background src={backgroudImg2} alt="plant" direction="right" />
        <Foreground src={foregroundImg} alt="screenshot" />
      </HeaderMedia>
      <CompaniesContainer>
        {companiesLogos.map((logo, index) => (
          <CompanyLogo src={logo} alt="logo" />
        ))}
      </CompaniesContainer>
    </Wrapper>
  );
};

export default Header;
