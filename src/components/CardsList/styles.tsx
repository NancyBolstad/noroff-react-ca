import styled, { css } from 'styled-components';
import Button from '../Button';

export const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.xs}rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    padding: ${props => props.theme.spacing.xs}rem 0;
  }
`;

export const List = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: calc(-${props => props.theme.spacing.xs}rem / 2);

    &::after {
      content: '';
      justify-content: flex-start;
      width: calc(31.333% - ${props => props.theme.spacing.m / 2}rem);
    }
  }
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  color: ${props => props.theme.colors.onSurface};
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  border: 2px solid ${props => props.theme.colors.primaryVariant};
  border-radius: 15px;
  transition: all 0.15s ease-in-out;

  @media screen and (min-width: 768px) {
    width: calc(50% - ${props => props.theme.spacing.xs}rem);
    padding: ${props => props.theme.spacing.m}rem;
    margin: calc(${props => props.theme.spacing.xs}rem / 2);
    margin-bottom: ${props => props.theme.spacing.m}rem;
  }
  @media screen and (min-width: 1280px) {
    width: calc(31.333% - ${props => props.theme.spacing.m / 2}rem);
    margin-bottom: ${props => props.theme.spacing.l}rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 280px;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
`;

export const LikeButton = styled(Button)<{ isLiked: boolean }>`
  background-color: transparent;

  svg {
    width: 48px;
    height: 48px;
    stroke-width: 10px;
    fill: ${props => props.theme.colors.primary};
    margin-top: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.isLiked &&
    css`
      svg {
        fill: ${props => props.theme.colors.secondary};
      }
    `}
`;