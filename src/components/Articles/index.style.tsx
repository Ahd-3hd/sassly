import styled from "styled-components";
interface IArticle {
  img: string;
  category: string;
  title: string;
  description: string;
  avatar: string;
  username: string;
  date: string;
  href: string;
}

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const TitleContainer = styled.div``;

export const LinkContainer = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  :hover {
    > div:after {
      left: 0;
    }
  }
`;
export const ArticleLink = styled.span`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pNormal};
  ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
`;
export const LinkBorder = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 0.2rem;
  background: ${({ theme: { colors } }) => colors.grey3};
  position: relative;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.primary};
    transition: left 0.4s;
  }
`;

export const ArticlesContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 1rem;
    grid-row-gap: 0px;
    align-content: end;
    margin-top: 5rem;
    > a:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
      display: flex;
      flex-direction: row-reverse;
      align-self: end;
      height: auto;
    }
    > a:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
      height: auto;
    }
    > a:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
      height: auto;
    }
  }
`;
export const ArticleWrapper = styled.a`
  display: block;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.grey5};
  margin: 2rem 0;
  text-decoration: none;
  transition: transform 0.3s ease-in;
  :hover {
    transform: scale(0.98);
  }
`;
export const ArticleImage = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  min-height: 270px;
  width: 100%;
  background-position: center;
  background-size: cover;
`;
export const ArticleMetaDetailsContainer = styled.div``;
export const ArticleDetails = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey4};
`;
export const ArticleTitle = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const ArticleCategory = styled.p`
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  display: inline-block;
  padding: 0.7rem 1rem;
  border-radius: 6rem;
  font-size: 0.8rem;
  margin: 0.3rem 0;
`;
export const ArticleDescription = styled.p`
  color: ${({ theme: { colors } }) => colors.grey2};
  line-height: 200%;
`;
export const ArticleMeta = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const PosterImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin: 0 0.7rem;
`;
export const PosterName = styled.p`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const ArticleDate = styled.p`
  color: ${({ theme: { colors } }) => colors.grey2};
`;

export const Article = ({
  img,
  category,
  title,
  description,
  avatar,
  username,
  date,
}: IArticle) => {
  return (
    <ArticleWrapper href="#">
      <ArticleImage img={img} />
      <ArticleMetaDetailsContainer>
        <ArticleDetails>
          <ArticleCategory>{category}</ArticleCategory>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
        </ArticleDetails>
        <ArticleMeta>
          <PosterContainer>
            <PosterImg src={avatar} alt="avatar" />
            <PosterName>{username}</PosterName>
          </PosterContainer>
          <ArticleDate>{date}</ArticleDate>
        </ArticleMeta>
      </ArticleMetaDetailsContainer>
    </ArticleWrapper>
  );
};
