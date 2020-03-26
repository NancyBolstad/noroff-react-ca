import * as React from 'react';
import HomeContent from '../../components/HomeContent';
import { Context } from '../../context/GlobalContext';
import NewsList from '../../components/NewsList';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);

  console.log(favorites);

  return (
    <HomeContent>
      {favorites.length < 1 && <NewsList />}
      {(favorites || []).map((element, index) => (
        <h1 key={index}>{element.name}</h1>
      ))}
    </HomeContent>
  );
};

export default Favorites;
