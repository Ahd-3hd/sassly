import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
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

export const IntegrationsContainer = styled.div``;
