import {
  Wrapper,
  NewsletterContainer,
  TextContainer,
  IntegrationsContainer,
} from "./index.style";
import { Heading2, Paragraph } from "../Typography";
import Newsletter from "../Newletter";
import { GreyCard } from "../Cards";
import integration1 from "../../assets/icons/integration1.svg";
import integration2 from "../../assets/icons/integration2.svg";
import integration3 from "../../assets/icons/integration3.svg";

const data = [
  {
    icon: integration1,
    title: "Webflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus",
  },
  {
    icon: integration2,
    title: "Memberstack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus",
  },
  {
    icon: integration3,
    title: "Zapier",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus",
  },
];

const Integration = () => {
  return (
    <Wrapper>
      <NewsletterContainer>
        <TextContainer>
          <Heading2>Built-in Integrations</Heading2>
          <Paragraph variant="pNormal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </TextContainer>
        <Newsletter />
      </NewsletterContainer>
      <IntegrationsContainer>
        {data.map((item) => (
          <GreyCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </IntegrationsContainer>
    </Wrapper>
  );
};

export default Integration;
