import React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import ImageGrid from '../../components/ImageGrid';
import { createImagesList } from '../../util/mockHelpers';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="Noroff React App - Production" isPrimaryColor />
      <HomeContent>
        <ImageGrid images={createImagesList(7)} />
      </HomeContent>
    </>
  );
};

export default Home;
