import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";
import Navbar from "../Navbar";
import logoImg from "../../assets/img/logo.svg";

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navbar imgSrc={logoImg} />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
