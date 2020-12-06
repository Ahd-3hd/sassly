import styled from "styled-components";

const NavLinkListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  :hover {
    > a {
      color: ${({ theme: { colors } }) => colors.grey2};
      transform: translateY(-5px);
    }
  }
`;

const NavLinkAnchor = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  transition: 0.3s ease-in;
  display: inline-block;
  font-size: 18px;
`;

export const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <NavLinkListItem>
      <NavLinkAnchor href={href}>{text}</NavLinkAnchor>
    </NavLinkListItem>
  );
};
