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
export const TitleContainer = styled.div`
  > h3 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.heading2};
  }
  @media (min-width: 768px) {
    text-align: center;
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
export const AudienceWrapper = styled.div``;
export const AudienceImg = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 1rem;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
`;
export const AudienceTitle = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.heading4};
`;
export const AudienceDescription = styled.p`
  color: ${({ theme: { colors } }) => colors.grey2};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pNormal};
`;

export const AudienceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <AudienceWrapper>
      <AudienceImg src={img} alt="audience" />
      <AudienceTitle>{title}</AudienceTitle>
      <AudienceDescription>{description}</AudienceDescription>
    </AudienceWrapper>
  );
};
