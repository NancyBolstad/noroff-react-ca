import * as React from 'react';
import { storiesOf } from '@storybook/react';
import HomeContent from './';
import Heading from '../Heading';

const mockHeadingA = <Heading content="Neque porro quisquam dolorem" isPrimaryColor />;
const mockHeadingB = <Heading content="Neque porro quisquam dolorem" />;

export const mockChildren = [mockHeadingA, mockHeadingB, mockHeadingA, mockHeadingB];

storiesOf('Component/HomeContent', module).add('Default', () => (
  <HomeContent children={mockChildren} />
));
