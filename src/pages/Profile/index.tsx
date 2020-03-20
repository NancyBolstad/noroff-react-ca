import * as React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const Profile: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="Welcome back!" isPrimaryColor />
      <HomeContent>
        <NewsList />
      </HomeContent>
    </>
  );
};

export default Profile;
