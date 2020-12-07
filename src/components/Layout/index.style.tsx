import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background:#fbfbfb;
    }
    *{
        box-sizing:border-box;
        font-family:inherit;
    }
`;
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;
