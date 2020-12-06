import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.heading1};
  margin-top: 0;
  margin-bottom: 27px;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const Heading2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.heading2};
  margin-top: 0;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const Heading3 = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.heading3};
  margin-top: 0;
  margin-bottom: 14px;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const Heading4 = styled.h4`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.heading4};
  margin-top: 0;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const Paragraph = styled.p<{ variant: "pSmall" | "pNormal" | "pLarge" }>`
  font-size: ${({ theme: { fontSizes }, variant }) => fontSizes[variant]};
  color: ${({ theme: { colors } }) => colors.grey2};
  line-height: 150%;
`;
