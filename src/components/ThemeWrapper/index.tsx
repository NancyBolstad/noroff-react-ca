import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../util/defaultTheme';
import GlobalContext from '../../context/GlobalContext';
import { GlobalStyle } from './styles';

export interface Props {}

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <GlobalStyle />
      <GlobalContext>
        <div>{children}</div>
      </GlobalContext>
    </div>
  </ThemeProvider>
);

export default ThemeWrapper;
