import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";
import Navbar from "../Navbar";
import logoImg from "../../assets/img/logo.svg";
import Footer from "../Footer";

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navbar imgSrc={logoImg} />
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
