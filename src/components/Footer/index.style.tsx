import styled from "styled-components";

export const Wrapper = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export const TopSection = styled.div`
  @media (min-width: 990px) {
    display: flex;
    > div {
      flex: 1;
    }
  }
`;
export const LogoContainer = styled.div``;
export const LinksContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    padding: 0 1rem;
    > div {
      margin-right: 2rem;
    }
  }
`;

export const LogoLink = styled.a`
  display: inline-block;
  transition: transform 0.3s;
  :hover {
    transform: scale(0.97);
  }
`;
export const Logo = styled.img``;
export const SocialMediaContainer = styled.div`
  margin: 1rem 0;
`;
export const SocialMediaLink = styled.a`
  display: inline-flex;
  background: ${({ theme: { colors } }) => colors.primary};
  margin: 0;
  margin-right: 0.7rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: 30px;
  width: 30px;
  > svg {
    height: 100%;
    fill: ${({ theme: { colors } }) => colors.white};
  }
  transition: transform 0.3s;
  :hover {
    transform: scale(0.9);
  }
`;

export const LinksListContainer = styled.div``;
export const LinksListTitle = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 18px;
`;
export const LinksList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  > li {
    margin: 0.7rem 0;
    > a {
      color: ${({ theme: { colors } }) => colors.grey2};
      font-size: 1rem;
    }
    :hover {
      > a {
        color: ${({ theme: { colors } }) => colors.grey1};
      }
    }
  }
`;

export const MobileContainer = styled.div`
  padding: 0.8rem;
  background: ${({ theme: { colors } }) => colors.grey5};
  border-radius: 0.6rem;
`;
export const MobileTitle = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
  line-height: 150%;
  font-size: 1.2rem;
`;
export const MobileParagraph = styled.p`
  color: ${({ theme: { colors } }) => colors.grey1};
  line-height: 160%;
`;
export const MobileButton = styled.a`
  text-decoration: none;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 60px;
  margin: 0.7rem 0;
  font-weight: bold;
  > svg {
    height: 40%;
    fill: ${({ theme: { colors } }) => colors.white};
    margin-right: 0.6rem;
  }
  transition: transform 0.3s ease-in;
  :hover {
    transform: scale(0.97);
  }
`;
export const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    > a {
      flex: 1;
      margin: 0 0.5rem;
    }
  }
`;

export const BottomSection = styled.div`
  text-align: center;
  margin-top: 0.7rem 0;
`;
export const BottomSectionP = styled.p`
  font-size: 13px;
  color: ${({ theme: { colors } }) => colors.grey2};
`;
export const BottomLink = styled.a`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
`;
