import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.m}rem;
  max-width: 1440px;
  margin: 0 auto;
`;

interface Props {}

export const HomeContent: React.FunctionComponent<Props> = ({ children }) => {
  if (!children) return null;
  return <Wrapper>{children}</Wrapper>;
};

export default HomeContent;
