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
    word-break: keep-all;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const CardsContainer = styled.div`
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${({ theme: { colors } }) => colors.grey4};
    align-items: start;
    grid-gap: 1px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const PromoCard = styled.div`
  padding: 1rem;
  background: #fbfbfb;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey4};
  @media (min-width: 480px) {
    border-bottom: none;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 900px) {
    height: 300px;
  }
`;
export const CardIcon = styled.img`
  border-radius: 100%;
  max-width: 80px;
`;
export const CardTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
  font-size: 18px;
`;
export const CardParagraph = styled.p`
  color: ${({ theme: { colors } }) => colors.grey2};
  letter-spacing: 0.8px;
  line-height: 1.6rem;
`;

export const Promo = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <PromoCard>
    <CardIcon src={icon} alt="icon" />
    <CardTitle>{title}</CardTitle>
    <CardParagraph>{text}</CardParagraph>
  </PromoCard>
);
