import React from 'react';
import { loader } from '../../util/icons';
import { LoaderWrapper } from './styles';

const Loader: React.FC = () => {
  return <LoaderWrapper>{loader}</LoaderWrapper>;
};

export default Loader;
