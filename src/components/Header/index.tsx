import { Wrapper, NewsletterContainer, NewsletterInput } from "./index.style";
import { Heading1, Paragraph } from "../Typography";
import Button from "../Buttons";

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
      </NewsletterContainer>
    </Wrapper>
  );
};

export default Header;
