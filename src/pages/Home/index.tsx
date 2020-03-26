import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { Result } from '../../types/data';
import SearchCards from '../../components/SearchCards/SearchCards';
import CardsList from '../../components/CardsList/';
import useIsDesktop from '../../hooks/useIsDesktop';
import Loader from '../../components/Loader';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [filtedData, setFilterData] = React.useState<Result[]>([]);
  const [isFullList, setIsFullList] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(true);

  function filter(value: string) {
    setLoading(true);
    const lowerCaseSearchValue = value.toLowerCase();
    const newArray: Result[] = localContext.default.filter(element => {
      const lowerGameName = element.name.toLowerCase();
      return lowerGameName.startsWith(lowerCaseSearchValue);
    });
    setFilterData(newArray);
    setIsFullList(false);
    setLoading(false);
  }

  React.useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <MainContent>
      <Typography
        element="h1"
        variant={useIsDesktop() ? 'h1' : 'h2'}
        content="Search RAWG Video Games"
        isPrimaryColor
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
      />
      <SearchCards handler={filter} />
      {loading ? <Loader /> : <CardsList cards={isFullList ? localContext.default : filtedData} />}
    </MainContent>
  );
};

export default Home;
