import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Select from '.';
import { mockOptions } from '../../util/constants';

const Wrapper = styled.div`
  padding: 1rem;
  display: inlin-flex;
`;

storiesOf('Component/Select', module).add('Default', () => (
  <Wrapper>
    <Select label="Sort by" required={true} options={mockOptions}></Select>
  </Wrapper>
));
