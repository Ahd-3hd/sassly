import { Wrapper } from "./index.style";
import { Heading3, Paragraph } from "../Typography";
import { TitleContainer, CustomersContainer, Quote } from "./index.style";
import customer1 from "../../assets/img/customer1.jpg";
import customer2 from "../../assets/img/customer2.jpg";
import customer3 from "../../assets/img/customer3.jpg";
import customer4 from "../../assets/img/customer4.jpg";

const data = [
  {
    img: customer1,
    name: "James Hudson",
    title: "CEO at Company",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.”",
  },
  {
    img: customer2,
    name: "Elena Summers",
    title: "CEO & CO-Founder",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.”",
  },
  {
    img: customer3,
    name: "Matt Smith",
    title: "Community Lead",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.”",
  },
  {
    img: customer4,
    name: "Stuart Newman",
    title: "Operations",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.”",
  },
];
const Customers = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading3>
          Don't take our word for it, see what our customers say
        </Heading3>
        <Paragraph variant="pNormal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mattis
          condimentum at quam tellus non.
        </Paragraph>
      </TitleContainer>
      <CustomersContainer>
        {data.map((item) => (
          <Quote
            key={item.name}
            img={item.img}
            title={item.title}
            text={item.text}
            name={item.name}
          />
        ))}
      </CustomersContainer>
    </Wrapper>
  );
};

export default Customers;
