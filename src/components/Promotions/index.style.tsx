import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
`;
export const TitleContainer = styled.div`
  > p {
    max-width: 40ch;
    margin: 0;
  }
  > h3 {
    max-width: 30ch;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.heading2};
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
