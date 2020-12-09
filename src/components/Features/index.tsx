import { useState, useLayoutEffect, useRef } from "react";
import {
  Wrapper,
  TitleContainer,
  TabsContainer,
  Tab,
  TabIcon,
  TabTitle,
  TabText,
  TabDetails,
  FullDescription,
  FullDescriptionTitle,
  FullDescriptionText,
  FullDescriptionDetails,
  FullDescriptionImg,
  FullDescriptionIcon,
  Slider,
} from "./index.style";
import { Heading4, Paragraph } from "../Typography";
import noteIcon from "../../assets/icons/note.svg";
import paperIcon from "../../assets/icons/paper.svg";
import clockIcon from "../../assets/icons/clock.svg";
import notesImg from "../../assets/img/notes.jpg";
import projectsImg from "../../assets/img/projects.jpg";
import documentsImg from "../../assets/img/documents.jpg";

const data = [
  {
    icon: noteIcon,
    title: "Notes",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullTitle: "Notes and Journal",
    img: notesImg,
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus, urna feugiat nec, ut. Vitae morbi tortor suspendisse morbi nibh odio. Faucibus ullamcorper ut suspendisse nisi risus. Dolor scelerisque donec ipsum elementum. Tellus arcu.",
  },
  {
    icon: clockIcon,
    title: "Project & Tasks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullTitle: "Project & Tasks",
    img: projectsImg,
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus, urna feugiat nec, ut. Vitae morbi tortor suspendisse morbi nibh odio. Faucibus ullamcorper ut suspendisse nisi risus. Dolor scelerisque donec ipsum elementum. Tellus arcu.",
  },
  {
    icon: paperIcon,
    title: "Documents",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullTitle: "Documents",
    img: documentsImg,
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi, lectus sit eget. Pretium feugiat gravida metus, urna feugiat nec, ut. Vitae morbi tortor suspendisse morbi nibh odio. Faucibus ullamcorper ut suspendisse nisi risus. Dolor scelerisque donec ipsum elementum. Tellus arcu.",
  },
];

const Features = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState(0);
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
      <TitleContainer className="heading-features">
        <Heading4>What our customers do with Saasly?</Heading4>
        <Paragraph variant="pNormal" className="paragraph-features">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
      </TitleContainer>
      <Slider>
        <TabsContainer>
          {data.map((item, index) => (
            <Tab
              key={index}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              <TabIcon src={item.icon} />
              <TabDetails>
                <TabTitle>{item.title}</TabTitle>
                <TabText>{item.text}</TabText>
              </TabDetails>
            </Tab>
          ))}
        </TabsContainer>

        <FullDescription>
          <FullDescriptionDetails>
            <FullDescriptionIcon src={data[activeTab].icon} />
            <FullDescriptionTitle>
              {data[activeTab].fullTitle}
            </FullDescriptionTitle>
            <FullDescriptionText>
              {data[activeTab].fullDescription}
            </FullDescriptionText>
          </FullDescriptionDetails>
          <FullDescriptionImg src={data[activeTab].img} />
        </FullDescription>
      </Slider>
    </Wrapper>
  );
};
export default Features;
