import * as React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const News: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="News List" isPrimaryColor />
      <HomeContent>
        <NewsList />
      </HomeContent>
    </>
  );
};

export default News;
