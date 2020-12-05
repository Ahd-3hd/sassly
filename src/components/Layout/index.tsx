import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
