import * as React from 'react';
import HomeContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import InfoList from '../../components/InfoList';
import Slider from '../../components/Slider/';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  return (
    <HomeContent>
      {favorites.length < 1 ? (
        <InfoList sectionTitle="You don't have any saved products" />
      ) : (
        <Slider slides={favorites} />
      )}
    </HomeContent>
  );
};

export default Favorites;
