import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  position: relative;
  z-index: 2;
`;
export const LogoLink = styled.a`
  transition: transform 0.3s ease-in;
  :hover {
    transform: scale(0.95);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoImg = styled.img`
  width: 100%;
`;
export const NavLinksContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: none;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.7;
  @media (min-width: 990px) {
    display: flex;
  }
`;
export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  .callToAction {
    display: none;
  }
  @media (min-width: 768px) {
    .callToAction {
      display: block;
    }
  }
`;
export const CartLink = styled.a`
  margin: 0 0.5rem;
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  transition: color 0.3s ease-in;
  display: inline-block;
  :hover {
    color: ${({ theme: { colors } }) => colors.grey3};
  }
`;
export const MenuButton = styled.button`
  background: ${({ theme: { colors } }) => colors.primary};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 7px;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${({ theme: { colors } }) => colors.white};
    width: 80%;
    height: 80%;
  }
  transition: transform 0.3s ease-in;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
  display: flex;
  @media (min-width: 999px) {
    display: none;
  }
`;

export const MobileDropDownMenu = styled.ul<{ shouldShow: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ shouldShow }) => (shouldShow ? "4rem" : "-900%")};
  left: 0;
  width: 100%;
  background: #fbfbfb;
  padding: 0.7rem;
  margin: 0;
  > li {
    margin: 1rem 0;
    > a {
      font-size: 1.5rem;
    }
  }
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  transition: top 0.5s;
  z-index: -1;
  @media (min-width: 999px) {
    display: none;
  }
`;
export const MobileDropMenuButton = styled.li`
  list-style-type: none;
  > button {
    width: 100%;
  }
`;
