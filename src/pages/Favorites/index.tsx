import * as React from 'react';
import Heading from '../../components/Heading';
import { Context } from '../../context/GlobalContext';

interface Props {}

export const Favorites: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);

  console.log(favorites);

  return (
    <>
      <Heading content="Favorites" isPrimaryColor />
      {(favorites || []).map((element, index) => (
        <h1 key={index}>{element.name}</h1>
      ))}
    </>
  );
};

export default Favorites;
