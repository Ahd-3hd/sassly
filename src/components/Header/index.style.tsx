import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 1rem;
  padding-top: 3rem;
  > h1 {
    font-size: 2.5rem;
    max-width: 15ch;
  }
  > p {
    color: ${({ theme: { colors } }) => colors.grey2};
  }

  @media (min-width: 768px) {
    > h1 {
      max-width: 25ch;
      text-align: center;
      margin: auto;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.heading1};
    }
    > p {
      text-align: center;
    }
  }
`;

export const NewsletterContainer = styled.form`
  position: relative;
  > button {
    width: 100%;
    margin-top: 1rem;
  }
  @media (min-width: 480px) {
    max-width: 400px;
    margin: auto;
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

export const HeaderMedia = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  max-width: 1200px;
  margin: 1rem auto;
`;

export const Foreground = styled.img`
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 65%;
  }
`;
export const Background = styled.img<{ direction: string }>`
  display: none;
  max-width: 300px;
  height: 100%;
  width: auto;
  object-fit: contain;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    bototm: 0;
    z-index: -1;
    opacity: 0.9;
    ${({ direction }) => {
      if (direction === "left") return "left: 2rem;";
      if (direction === "right") return "right:2rem;";
    }};
  }
`;

export const CompaniesContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  justify-content: center;
  flex-wrap: wrap;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const CompanyLogo = styled.img`
  transition: transform 0.3s ease-in;
  margin: 0.5rem 2rem;
  width: 150px;

  :hover {
    transform: scale(0.9);
  }
`;
