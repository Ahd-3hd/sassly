import { Wrapper } from "./index.style";
import { Heading3, Paragraph } from "../Typography";
import { TitleContainer, CustomersContainer, Quote } from "./index.style";
import customer1 from "../../assets/img/customer1.jpg";
import customer2 from "../../assets/img/customer2.jpg";
import customer3 from "../../assets/img/customer3.jpg";
import customer4 from "../../assets/img/customer4.jpg";
import { useState, useLayoutEffect, useRef } from "react";

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
  const wrapperRef = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => setIsVisible(entry.isIntersecting));
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.4,
    });
    if (wrapperRef && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
  }, []);
  return (
    <Wrapper ref={wrapperRef} isVisible={isVisible}>
      <TitleContainer>
        <Heading3 className="heading">
          Don't take our word for it, see what our customers say
        </Heading3>
        <Paragraph variant="pNormal" className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mattis
          condimentum at quam tellus non.
        </Paragraph>
      </TitleContainer>
      <CustomersContainer className="cardsContainer">
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
