import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

interface ButtonProps {
  size: Size;
  variant: Variant;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  border: 2px solid transparent;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-left: ${props => props.theme.spacing.xs}rem;
  }
  ${props =>
    props.size === 'small' &&
    css`
      height: 40px;
      min-width: 75px;
      padding: 0 32px;
      ${createFontStyles(props.theme.fonts.b2)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        padding: 0 20px;
      }
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      height: 42px;
      width: 100%;
      padding: 0 20px;
      ${createFontStyles(props.theme.fonts.b2)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        width: 160px;
      }
    `};
  ${props =>
    props.size === 'large' &&
    css`
      height: 45px;
      min-width: 250px;
      padding-left: 75px;
      padding-right: 75px;
      border-radius: 35px;
      ${createFontStyles(props.theme.fonts.b3)};

      @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
        height: 50px;
      }
    `};
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.onSecondary};
      &:hover,
      &:active,
      &:focus {
        opacity: 0.9;
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      border-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.onBackground};
      svg {
        fill: ${props => props.theme.colors.secondary};
      }
      &:hover,
      &:active,
      &:focus {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.onSecondary};
        svg {
          fill: ${props => props.theme.colors.onSecondary};
        }
      }
    `};
  ${props =>
    props.variant === 'tertiary' &&
    css`
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.onBackground};
      border: none;
      &:hover,
      &:active,
      &:focus {
        opacity: 0.8;
      }
      svg {
        fill: ${props => props.theme.colors.onBackground};
      }
    `};
  ${props =>
    props.variant === 'quaternary' &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.onPrimary};
      border-color: ${props => props.theme.colors.onPrimary};
      &:hover,
      &:active,
      &:focus {
        background-color: ${props => props.theme.colors.onPrimary};
        color: ${props => props.theme.colors.onBackground};
        svg {
          fill: ${props => props.theme.colors.onBackground};
        }
      }
      svg {
        fill: ${props => props.theme.colors.onPrimary};
      }
    `};
`;

const ButtonExternal = Button.withComponent('a');
const ButtonInput = Button.withComponent('input');

export default Button;
export { ButtonExternal, ButtonInput };
