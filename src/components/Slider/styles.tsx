import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.s}rem 0;
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: ${props => props.theme.spacing.m}rem 0;
  }
`;

export const Slide = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: ${props => props.theme.spacing.xs}rem;
  grid-template-areas:
    'slider-text'
    'slider-image'
    'slider-nav';
`;

export const TextContent = styled.div`
  grid-area: slider-text;
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const ImageContent = styled.div`
  grid-area: slider-image;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 880px;
    width: 100%;
    height: 580px;
  }
`;

export const SliderNav = styled.div`
  grid-area: slider-nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
`;

export const SlideTitle = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => `${props.theme.spacing.xs}rem 0 ${props.theme.spacing.xs}rem`};
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    margin: ${props => `${props.theme.spacing.xs}rem 0`};
  }
`;

export const Dots = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Dot = styled.li<{ active?: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.colors.secondary};
    `}
`;

export const PrevNextButton = styled.a<{ next?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondaryVariant};
  box-shadow: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing.xs}rem;
  }
  svg {
    width: 28px;
    height: 28px;
    transform: rotate(90deg);
    path {
      fill: ${props => props.theme.colors.background};
    }
  }
  ${props =>
    props.next &&
    css`
      svg {
        transform: rotate(270deg);
      }
    `}
`;
