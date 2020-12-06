import {
  Wrapper,
  NewsletterContainer,
  NewsletterInput,
  NewsletterArrowContainer,
  ArrowImg,
  ArrowLabel,
} from "./index.style";
import { Heading1, Paragraph } from "../Typography";
import Button from "../Buttons";
import arrowImg from "../../assets/img/newsletterarrow.svg";

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
    </Wrapper>
  );
};

export default Header;
