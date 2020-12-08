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
  return (
    <Wrapper>
      <Heading1>The Next Generation Notes App</Heading1>
      <Paragraph variant="pLarge">
        This page is for Demo purposes only - it is not intended for commercial
        use!
      </Paragraph>
      <Newsletter withArrow center />
      <HeaderMedia>
        <Background src={backgroudImg1} alt="plant" direction="left" />
        <Background src={backgroudImg2} alt="plant" direction="right" />
        <Foreground src={foregroundImg} alt="screenshot" />
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
