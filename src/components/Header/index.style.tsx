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
