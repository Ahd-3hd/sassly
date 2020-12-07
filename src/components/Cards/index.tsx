import styled from "styled-components";

export const GreyCardWrapper = styled.div`
  padding: 2rem 1rem;
  background: ${({ theme: { colors } }) => colors.grey5};
  margin: 1rem;
  box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.grey5};
  display: flex;
  cursor: pointer;
  transition: transform 0.4s;
  :hover {
    transform: scale(0.95);
    .border:after {
      left: 0;
    }
  }
  @media (min-width: 990px) {
    flex-direction: column;
  }
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
  ${({ theme: { colors } }) => colors.primary};
`;
export const GreyCardParagraph = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pSmall};
  color: ${({ theme: { colors } }) => colors.grey2};
  line-height: 150%;
`;
export const LinkContainer = styled.div`
  display: inline-block;
`;
export const GreyCardLink = styled.a`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pNormal};
  ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
`;
export const LinkBorder = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 0.2rem;
  background: ${({ theme: { colors } }) => colors.grey3};
  position: relative;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.primary};
    transition: left 0.4s;
  }
`;

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
        <LinkContainer>
          <GreyCardLink href="#">View Integration</GreyCardLink>
          <LinkBorder className="border" />
        </LinkContainer>
      </GreyCardDetails>
    </GreyCardWrapper>
  );
};
