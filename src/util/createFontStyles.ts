import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import { Font, Theme } from '../types/theme';

function createFontStyles(font: Font): FlattenInterpolation<ThemeProps<DefaultTheme & Theme>> {
  return css`
    font-family: ${font.family};
    font-weight: ${font.weight};
    font-size: ${font.size}rem;
    ${font.lineHeight &&
      css`
        line-height: ${font.lineHeight};
      `};
  `;
}

export default createFontStyles;
