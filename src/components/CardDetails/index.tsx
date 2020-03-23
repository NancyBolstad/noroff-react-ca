import * as React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';
import Tag from '../Tag';
import { Genre, Platform2 } from '../../types/details';

export interface Props {
  title: string;
  image: string;
  description: string;
  websiteLink: string;
  genres: Genre[];
  platforms: Platform2[];
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing.l}rem ${props => props.theme.spacing.s}rem;
`;

const ImageWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  flex: 1;
  img {
    width: 100%;
    min-height: 380px;

    @media screen and (min-width: 1280px) {
      min-height: 680px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.l}rem 0;
  }
`;

const RichTextWrapper = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  white-space: pre-wrap;

  @media screen and (min-width: 1280px) {
    margin-left: ${props => props.theme.spacing.l}rem;
  }

  p {
    margin: 0;
  }
`;

const CardDetails: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  websiteLink,
  genres,
  platforms,
}) => {
  function transformRichText() {
    return { __html: description };
  }
  return (
    <Wrapper>
      <Typography variant="h1" element="h2" top={32} bottom={26} content={title} />
      <ImageWrapper>
        <img src={image} alt={title}></img>
      </ImageWrapper>
      <ContentWrapper>
        <Tag genres={genres} platforms={platforms} />
        <RichTextWrapper dangerouslySetInnerHTML={transformRichText()} />
      </ContentWrapper>
      <ButtonExternal
        variant="primary"
        size="large"
        href={`${websiteLink}`}
        title="Visit game website"
        target="_blank"
      >
        Play Game
      </ButtonExternal>
    </Wrapper>
  );
};

export default CardDetails;
