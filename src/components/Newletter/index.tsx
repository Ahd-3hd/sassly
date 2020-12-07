import styled from "styled-components";
import arrowImg from "../../assets/img/newsletterarrow.svg";
import Button from "../Buttons";

export const NewsletterContainer = styled.form<{ center?: boolean }>`
  position: relative;
  ${({ center }) => (!center ? "flex: 1;" : null)};
  > button {
    width: 100%;
    margin-top: 1rem;
  }
  @media (min-width: 480px) {
    max-width: 400px;
    ${({ center }) => (center ? "margin: auto;" : null)};
    > button {
      width: auto;
      position: absolute;
      margin-top: 0;
      right: 0.2rem;
      top: 6px;
    }
  }
`;
export const NewsletterInput = styled.input`
  padding: 20px 32px;
  border-radius: 5px;
  border: none;
  background: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.primary};
  ::placeholder {
    color: ${({ theme: { colors } }) => colors.grey3};
  }
  outline: none;
  width: 100%;
`;

export const NewsletterArrowContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
export const ArrowImg = styled.img`
  margin-left: 0.5rem;
  width: 100%;
  max-width: 70px;
  opacity: 0.7;
`;
export const ArrowLabel = styled.p`
  color: ${({ theme: { colors } }) => colors.grey2};
`;

const Newsletter = ({
  withArrow,
  center,
}: {
  withArrow?: boolean;
  center?: boolean;
}) => {
  return (
    <NewsletterContainer center={center}>
      <NewsletterInput
        type="email"
        required
        placeholder="Enter your email here..."
      />
      <Button size="small" primary label="Get Started" />
      {withArrow && (
        <NewsletterArrowContainer>
          <ArrowLabel>Get started for free</ArrowLabel>
          <ArrowImg src={arrowImg} />
        </NewsletterArrowContainer>
      )}
    </NewsletterContainer>
  );
};

export default Newsletter;
