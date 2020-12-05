import styled from "styled-components";

const Wrapper = styled.button<{
  variant: "small" | "normal" | "large";
  primary?: boolean;
}>`
  padding: ${({ variant }) => {
    if (variant === "small") return "14px 32px";
    if (variant === "normal") return "20px 36px";
    if (variant === "large") return "20px 68px";
  }};
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.primary : colors.white};

  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.white : colors.primary};
  font-weight: bold;
  font-size: ${({ variant }) => {
    if (variant === "small" || variant === "normal") return "16px";
    if (variant === "large") return "22px";
  }};
  border-radius: 6px;
  cursor: pointer;
  border: ${({ theme: { colors }, primary }) =>
    primary ? "none" : `2px solid ${colors.primary}`};
  transition: 0.3s ease-in;
  transform-origin: center;
  :hover {
    transform: scale(0.97);
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
  outline: none;
`;

const Button = () => {
  return (
    <Wrapper variant="normal" primary>
      click
    </Wrapper>
  );
};

export default Button;
