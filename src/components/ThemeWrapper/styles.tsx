import { createGlobalStyle } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export interface Props {}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
    color: ${props => props.theme.colors.onBackground};
    ${props => createFontStyles(props.theme.fonts.b1)}
  }
  * {
    box-sizing: border-box;
  }
`;
