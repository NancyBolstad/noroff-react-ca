import React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import CardsList from '../../components/CardsList';
import { Context } from '../../context/GlobalContext';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  return (
    <>
      <Heading content="RAWG Video Games React App" isPrimaryColor />
      <HomeContent>
        <CardsList cards={localContext.default} />
      </HomeContent>
    </>
  );
};

export default Home;
