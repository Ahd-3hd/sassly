import styled from "styled-components";

export const Wrapper = styled.div<{ ref: any; isVisible: boolean }>`
  padding: 1rem;
  @media (min-width: 450px) {
    .heading-features {
      transform: scale(${({ isVisible }) => (isVisible ? "1" : "0")});
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 0.7s ease-in;
    }
    .paragraph-features {
      transform: translateY(
        ${({ isVisible }) => (isVisible ? "0px" : "200px")}
      );
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 0.7s ease-in;
    }
  }
`;
export const TitleContainer = styled.div`
  @media (min-width: 1000px) {
    text-align: center;
    margin: 2rem 0;
  }
  > p {
    font-size: 1.5rem;
  }
  > h4 {
    font-size: 2.7rem;
  }
`;
export const TabsContainer = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  margin: 1rem;
  align-items: flex-start;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  border-top: 4px solid
    ${({ theme: { colors }, active }) =>
      active ? colors.primary : "rgba(0,0,0,0);"};
  padding-top: 1rem;
  transition: 0.1s ease-in;
  cursor: pointer;
  @media (min-width: 768px) {
    margin: 0;
    border-top: 4px solid ${({ theme: { colors } }) => colors.grey3};
    border-top: 4px solid
      ${({ theme: { colors }, active }) =>
        active ? colors.primary : colors.grey3};
  }
`;
export const TabIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 0.7rem;
`;
export const TabDetails = styled.div``;

export const TabTitle = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 1.2rem;
  margin: 0;
`;
export const TabText = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.grey1};
  line-height: 150%;
`;

export const FullDescription = styled.div`
  padding: 1rem;
  @media (min-width: 1000px) {
    display: flex;
  }
`;
export const FullDescriptionTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const FullDescriptionIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;
export const FullDescriptionText = styled.p`
  color: ${({ theme: { colors } }) => colors.grey1};
  line-height: 150%;
`;
export const FullDescriptionDetails = styled.div`
  @media (min-width: 1000px) {
    flex: 5;
    margin-right: 1rem;
  }
`;
export const FullDescriptionImg = styled.img`
  width: 100%;
  border-radius: 0.7rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 1000px) {
    flex: 1;
    max-width: 600px;
  }
`;

export const Slider = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
