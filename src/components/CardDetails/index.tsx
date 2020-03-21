import * as React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';

export interface Props {
  title: string;
  image: string;
  description: string;
  websiteLink: string;
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;
`;

const ImageWrapper = styled.div`
  background: ${props => props.theme.colors.surface};
  flex: 1;
  img {
    width: 100%;
    min-height: 380px;

    @media screen and (min-width: 768px) {
      min-height: 680px;
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 780px;
    margin: auto 0;
  }
`;

const RichTextWrapper = styled.div`
  line-height: 2;
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.5rem;
  margin-bottom:${props => props.theme.spacing.s}rem;
`;

const CardDetails: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  websiteLink,
}) => {
  function transformRichText() {
    return { __html: description };
  }
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image} alt={title}></img>
      </ImageWrapper>
      <ContentWrapper>
        <Typography variant="h1" element="h2" top={32} bottom={26} content={title} />
        <RichTextWrapper dangerouslySetInnerHTML={transformRichText()} />
        <ButtonExternal
          variant="primary"
          size="large"
          href={`${websiteLink}`}
          title="Visit game website"
          target="_blank"
        >
          Play Game
        </ButtonExternal>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CardDetails;
