import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Heading from './';

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const mockContent: string = 'Neque porro quisquam dolorem';
const HeadingPrimaryStory = <Heading content={mockContent} isPrimaryColor />;
const HeadingSecondaryStory = <Heading content={mockContent} />;

storiesOf('Component/Heading', module)
  .add('Default', () => <Wrapper>{HeadingPrimaryStory}</Wrapper>)
  .add('Variant', () => <Wrapper>{HeadingSecondaryStory}</Wrapper>);
