import * as React from 'react';
import Heading from '../../components/Heading';
import NewsList from '../../components/NewsList';
import CardsList from '../../components/CardsList/';
import { Context } from '../../context/GlobalContext';

interface Props {}


export const Favorites: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  return (
    <>
      <Heading content="Favorites" isPrimaryColor />
        <CardsList cards={localContext.favorites} favorites />
        <NewsList />
    </>
  );
};

export default Favorites;
