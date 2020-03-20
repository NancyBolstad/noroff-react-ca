import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeWrapper from '../src/components/ThemeWrapper';
import defaultTheme from '../src/util/defaultTheme';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /story\.tsx?$/));
}
const withWrapper = cb => (
  <ThemeWrapper theme={defaultTheme}>
    <BrowserRouter>{cb()}</BrowserRouter>
  </ThemeWrapper>
);

addDecorator(withWrapper);
configure(loadStories, module);
