import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 4rem;
`;

export const TitleContainer = styled.div`
  @media (min-width: 990px) {
    display: flex;
    justify-content: space-between;
    > h3 {
      max-width: 30ch;
    }
    > p {
      max-width: 40ch;
    }
  }
`;

export const CustomersContainer = styled.div`
  margin-top: 3rem;
  > div:nth-child(even) {
    background: ${({ theme: { colors } }) => colors.primary};
    color: white;
    > p {
      color: ${({ theme: { colors } }) => colors.grey4};
    }
    img {
      right: 0;
    }
  }
  > div:nth-child(odd) {
    background: ${({ theme: { colors } }) => colors.grey5};
    > p {
      color: ${({ theme: { colors } }) => colors.grey2};
    }
    img {
      left: 0;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    > div:nth-child(even) {
      img {
        top: auto;
        bottom: -40px;
      }
    }
  }
`;
export const CustomerQuote = styled.div`
  position: relative;
  padding: 2rem;
  margin: 4rem 0;
`;
export const CustomerImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 75px;
  position: absolute;
  top: -40px;
`;
export const CustomerText = styled.p`
  line-height: 160%;
  letter-spacing: 0.8px;
`;
export const CustomerName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
export const CustomerTitle = styled.p`
  font-style: italic;
`;

export const Quote = ({
  img,
  name,
  title,
  text,
}: {
  img: string;
  name: string;
  title: string;
  text: string;
}) => {
  return (
    <CustomerQuote>
      <CustomerImg src={img} alt="avatar" />
      <CustomerText>{text}</CustomerText>
      <CustomerName>{name}</CustomerName>
      <CustomerTitle>{title}</CustomerTitle>
    </CustomerQuote>
  );
};
