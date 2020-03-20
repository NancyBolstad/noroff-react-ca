import React from 'react';
import styled from 'styled-components';
import { loader } from '../../util/icons';

const Wrapper = styled.div`
  width: 100%;
  top: 50%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => props.theme.colors.secondary};
  }
`;

const Loader: React.FC = () => {
  return <Wrapper>{loader}</Wrapper>;
};

export default Loader;
