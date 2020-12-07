import styled from "styled-components";

export const GreyCardWrapper = styled.div`
  padding: 2rem 1rem;
  background: ${({ theme: { colors } }) => colors.grey5};
  margin: 1rem;
  box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.grey5};
  display: flex;
`;
export const GreyCardIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;
export const GreyCardDetails = styled.div`
  padding: 0 1rem;
`;
export const GreyCardTitle = styled.p`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pNormal};
  ${({ theme: { colors } }) => colors.primary}
`;
export const GreyCardParagraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pSmall};
  color: ${({ theme: { colors } }) => colors.grey2};
`;
export const GreyCardLink = styled.a``;

export const GreyCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <GreyCardWrapper>
      <GreyCardIcon src={icon} alt="icon" />
      <GreyCardDetails>
        <GreyCardTitle>{title}</GreyCardTitle>
        <GreyCardParagraph>{description}</GreyCardParagraph>
        <GreyCardLink href="#">View Integration</GreyCardLink>
      </GreyCardDetails>
    </GreyCardWrapper>
  );
};
