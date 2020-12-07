import {
  Wrapper,
  TitleContainer,
  CardsContainer,
  AudienceCard,
} from "./index.style";
import { Heading3, Paragraph } from "../Typography";
import audience1 from "../../assets/img/audience1.png";
import audience2 from "../../assets/img/audience2.png";
import audience3 from "../../assets/img/audience3.png";
import audience4 from "../../assets/img/audience4.png";
import Newsletter from "../Newletter";
const data = [
  {
    img: audience1,
    title: "For Maketers",
    description:
      "Lorem ipsum dolor sit ameterleo, consectetur adipiscing eliterlore olerili. Ullamcorper auctor volutpat nullaerm.",
  },
  {
    img: audience2,
    title: "For Designers",
    description:
      "Lorem ipsum dolor sit ameterleo, consectetur adipiscing eliterlore olerili. Ullamcorper auctor volutpat nullaerm.",
  },
  {
    img: audience3,
    title: "For Writers",
    description:
      "Lorem ipsum dolor sit ameterleo, consectetur adipiscing eliterlore olerili. Ullamcorper auctor volutpat nullaerm.",
  },
  {
    img: audience4,
    title: "For Bloggers",
    description:
      "Lorem ipsum dolor sit ameterleo, consectetur adipiscing eliterlore olerili. Ullamcorper auctor volutpat nullaerm.",
  },
];

const Audience = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading3>Designed to fit every use case</Heading3>
        <Paragraph variant="pNormal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
      </TitleContainer>
      <CardsContainer>
        {data.map((item) => (
          <AudienceCard
            key={item.title}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardsContainer>
      <Newsletter center />
    </Wrapper>
  );
};

export default Audience;
