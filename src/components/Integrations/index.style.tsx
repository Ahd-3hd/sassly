import styled from "styled-components";

export const Wrapper = styled.div<{ ref: any; isVisible: boolean }>`
  padding: 1rem;
  @media (min-width: 450px) {
    .heading {
      transform: scale(${({ isVisible }) => (isVisible ? "1" : "0")});
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 0.7s ease-in;
    }
    .paragraph {
      transform: translateY(
        ${({ isVisible }) => (isVisible ? "0px" : "200px")}
      );
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 0.7s ease-in;
    }
    .cardsContainer {
      transform: scale(${({ isVisible }) => (isVisible ? "1" : "0.7")});
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 0.7s ease-in;
    }
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const TextContainer = styled.div``;

export const IntegrationsContainer = styled.div`
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
