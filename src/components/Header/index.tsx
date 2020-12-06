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
} from "./index.style";
import { Heading1, Paragraph } from "../Typography";
import Button from "../Buttons";
import arrowImg from "../../assets/img/newsletterarrow.svg";
import foregroundImg from "../../assets/img/header1.jpg";
import backgroudImg1 from "../../assets/img/header2.svg";
import backgroudImg2 from "../../assets/img/header3.svg";
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
    </Wrapper>
  );
};

export default Header;
