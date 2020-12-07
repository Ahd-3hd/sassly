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
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey3};
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
