import * as React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="Thank you for getting in touched!" isPrimaryColor />
      <HomeContent>
        <NewsList />
      </HomeContent>
    </>
  );
};

export default Favorites;
