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
  margin: ${props => props.theme.spacing.xl}rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.m}rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  background: ${props => props.theme.colors.surface};
  flex: 1;
  img {
    width: 100%;
    min-height: 380px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.l}rem ${props => props.theme.spacing.xl}rem;
  p {
    line-height: 2;
    color: ${props => props.theme.colors.onBackground};
  }
`;

const CardDetails: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  websiteLink,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image} alt={title}></img>
      </ImageWrapper>
      <ContentWrapper>
        <Typography variant="h2" element="h2" top={32} bottom={26} content={title} />
        <Typography variant="b1" element="p" bottom={32} content={description} />
        <ButtonExternal
          variant="secondary"
          size="large"
          href={websiteLink}
          title="Visit game website"
        >
          Game Website
        </ButtonExternal>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CardDetails;
