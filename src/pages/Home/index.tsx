import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import CardsList from '../../components/CardsList';
import { Context } from '../../context/GlobalContext';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="RAWG Video Games React App"
        isPrimaryColor
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
      />
      <CardsList cards={localContext.default} />
    </MainContent>
  );
};

export default Home;
