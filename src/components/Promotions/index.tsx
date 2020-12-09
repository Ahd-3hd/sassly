import { useState, useLayoutEffect, useRef } from "react";
import { Wrapper, TitleContainer, CardsContainer, Promo } from "./index.style";
import { Heading3, Paragraph } from "../Typography";
import aiIcon from "../../assets/icons/ai.svg";
import bookIcon from "../../assets/icons/book.svg";
import cloudIcon from "../../assets/icons/cloud.svg";
import lockIcon from "../../assets/icons/lock.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import textIcon from "../../assets/icons/text.svg";
const data = [
  {
    icon: textIcon,
    title: "Simple, yet powerful",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
  {
    icon: aiIcon,
    title: "Built-in AI features",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
  {
    icon: phoneIcon,
    title: "Real time sync",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
  {
    icon: bookIcon,
    title: "Easy notes organization",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
  {
    icon: lockIcon,
    title: "Advanced 256-bit encryption",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
  {
    icon: cloudIcon,
    title: "Cloud based",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliterlore oleri. Ullamcorper auctor volutpat nulla.",
  },
];

const Promotions = () => {
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
          Why is Saasly a great note taking app for you?
        </Heading3>
        <Paragraph variant="pSmall" className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mattis
          condimentum at quam tellus non.
        </Paragraph>
      </TitleContainer>
      <CardsContainer className="cardsContainer">
        {data.map((item, index) => (
          <Promo
            key={index}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default Promotions;
