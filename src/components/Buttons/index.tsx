import styled from "styled-components";

const Wrapper = styled.button<{
  size: "small" | "normal" | "large";
  primary?: any;
}>`
  padding: ${({ size }) => {
    if (size === "small") return "14px 32px";
    if (size === "normal") return "20px 36px";
    if (size === "large") return "20px 68px";
  }};
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.primary : colors.white};

  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.white : colors.primary};
  font-weight: bold;
  font-size: ${({ size }) => {
    if (size === "small" || size === "normal") return "16px";
    if (size === "large") return "22px";
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
  margin: 0 0.2rem;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.05);
`;

const Button = ({
  size,
  primary,
  label,
  className,
}: {
  size: "small" | "normal" | "large";
  primary?: boolean;
  label: string;
  className?: string;
}) => {
  return (
    <Wrapper size={size} primary={primary} className={className}>
      {label}
    </Wrapper>
  );
};

export default Button;
