import { useRef, useLayoutEffect } from "react";
import {
  Wrapper,
  HeaderMedia,
  Foreground,
  Background,
  CompaniesContainer,
  CompanyLogo,
} from "./index.style";
import { Heading1, Paragraph } from "../Typography";
import Newsletter from "../Newletter";
import foregroundImg from "../../assets/img/header1.jpg";
import backgroudImg1 from "../../assets/img/header2.svg";
import backgroudImg2 from "../../assets/img/header3.svg";
import company1 from "../../assets/img/company1.svg";
import company2 from "../../assets/img/company2.svg";
import company3 from "../../assets/img/company3.svg";
import company4 from "../../assets/img/company4.svg";
import company5 from "../../assets/img/company5.svg";
const companiesLogos = [company1, company2, company3, company4, company5];
const Header = () => {
  const foregroundRef = useRef<HTMLImageElement>(null);
  const backgroundOneRef = useRef<HTMLImageElement>(null);
  const backgroundTwoRef = useRef<HTMLImageElement>(null);
  const handleScrollParallax = () => {
    const rate = window.pageYOffset * -0.1;
    if (foregroundRef && foregroundRef.current) {
      foregroundRef.current.style.transform = `translate3d(0px, ${rate}px,0px)`;
    }
    if (backgroundOneRef && backgroundOneRef.current) {
      backgroundOneRef.current.style.transform = `translate3d(0px, ${rate}px,0px)`;
    }
    if (backgroundTwoRef && backgroundTwoRef.current) {
      backgroundTwoRef.current.style.transform = `translate3d(0px, ${
        rate + 0.7
      }px,0px)`;
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScrollParallax);
  }, []);
  return (
    <Wrapper>
      <Heading1>The Next Generation Notes App</Heading1>
      <Paragraph variant="pLarge">
        This page is for Demo purposes only - it is not intended for commercial
        use!
      </Paragraph>
      <Newsletter withArrow center />
      <HeaderMedia>
        <Background
          ref={backgroundOneRef}
          src={backgroudImg1}
          alt="plant"
          direction="left"
        />
        <Background
          ref={backgroundTwoRef}
          src={backgroudImg2}
          alt="plant"
          direction="right"
        />
        <Foreground ref={foregroundRef} src={foregroundImg} alt="screenshot" />
      </HeaderMedia>
      <CompaniesContainer>
        {companiesLogos.map((logo, index) => (
          <CompanyLogo src={logo} alt="logo" key={index} />
        ))}
      </CompaniesContainer>
    </Wrapper>
  );
};

export default Header;
