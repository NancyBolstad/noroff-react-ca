import * as React from 'react';
import HomeContent from '../../components/HomeContent';
import { Context } from '../../context/GlobalContext';
import NewsList from '../../components/NewsList';
import Slider from '../../components/Slider';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  return (
    <HomeContent>
      {favorites.length < 1 ? (
        <NewsList />
      ) : (
        <Slider slides={favorites} />
      )}
    </HomeContent>
  );
};

export default Favorites;
