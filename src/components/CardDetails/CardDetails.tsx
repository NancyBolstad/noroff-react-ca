import * as React from 'react';
import Typography from '../Typography';
import { ButtonExternal } from '../Button/Button';
import Tag from '../Tag';
import { Genre, Platform2 } from '../../types/details';
import { Wrapper, ImageWrapper, ContentWrapper, RichTextWrapper } from './styles';

export interface Props {
  title: string;
  image: string;
  description: string;
  websiteLink: string;
  genres: Genre[];
  platforms: Platform2[];
}

const CardDetails: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  websiteLink,
  genres,
  platforms,
}) => {
  return (
    <Wrapper>
      <Typography variant="h1" element="h2" top={32} bottom={26} content={title} />
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <Tag genres={genres} platforms={platforms} />
        <RichTextWrapper dangerouslySetInnerHTML={{ __html: description }} />
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
