import {
  Wrapper,
  TitleContainer,
  LinkContainer,
  ArticleLink,
  LinkBorder,
  ArticlesContainer,
  Article,
} from "./index.style";
import { Heading3, Paragraph } from "../Typography";
import article1 from "../../assets/img/article1.jpg";
import article2 from "../../assets/img/article2.jpg";
import article3 from "../../assets/img/article3.jpg";
import user1 from "../../assets/img/customer1.jpg";
const data = [
  {
    img: article1,
    category: "Features",
    title: "Teams are coming to Sassly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    avatar: user1,
    username: "John Carter",
    date: "November 18, 2020",
  },
  {
    img: article2,
    category: "Guides",
    title: "How to organize your article links with Sassly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    avatar: user1,
    username: "Amy Smith",
    date: "November 18, 2020",
  },
  {
    img: article3,
    category: "Tools",
    title: "10 of the best productivity apps in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    avatar: user1,
    username: "Amy Smith",
    date: "November 18, 2020",
  },
];
const Articles = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading3>Resource Center</Heading3>
        <Paragraph variant="pNormal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <LinkContainer href="#">
          <ArticleLink>Go to Resources Center</ArticleLink>
          <LinkBorder />
        </LinkContainer>
      </TitleContainer>
      <ArticlesContainer>
        {data.map((item) => (
          <Article
            key={item.title}
            href="#"
            img={item.img}
            category={item.category}
            description={item.description}
            avatar={item.avatar}
            username={item.username}
            date={item.date}
            title={item.title}
          />
        ))}
      </ArticlesContainer>
    </Wrapper>
  );
};

export default Articles;
