import {
  Wrapper,
  LogoLink,
  LogoImg,
  NavLinksContainer,
  CartContainer,
  CartLink,
  MenuButton,
  MobileDropDownMenu,
  MobileDropMenuButton,
} from "./index.style";
import MenuIcon from "../../assets/svg/MenuIcon.svg";
import Button from "../Buttons";
import { NavLink } from "../Links";
import { useState } from "react";

const Navbar = ({ imgSrc }: { imgSrc: string }) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <Wrapper>
      <LogoLink href="#">
        <LogoImg src={imgSrc} alt="logo" />
      </LogoLink>
      <NavLinksContainer>
        <NavLink href="#" text="Home" />
        <NavLink href="#" text="About" />
        <NavLink href="#" text="Pricing" />
        <NavLink href="#" text="blog" />
        <NavLink href="#" text="Pages" />
      </NavLinksContainer>
      <CartContainer>
        <CartLink href="#">Cart (1)</CartLink>
        <Button
          size="small"
          primary
          label="Get Started"
          className="callToAction"
        />
        <MenuButton onClick={() => setShouldShow(!shouldShow)}>
          <MenuIcon />
        </MenuButton>
      </CartContainer>
      <MobileDropDownMenu shouldShow={shouldShow}>
        <NavLink href="#" text="Home" />
        <NavLink href="#" text="About" />
        <NavLink href="#" text="Pricing" />
        <NavLink href="#" text="blog" />
        <NavLink href="#" text="Pages" />
        <MobileDropMenuButton>
          <Button size="normal" primary label="Get Started" />
        </MobileDropMenuButton>
      </MobileDropDownMenu>
    </Wrapper>
  );
};

export default Navbar;
