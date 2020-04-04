import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { Result } from '../../types/data';
import SearchCards from '../../components/SearchCards/SearchCards';
import CardsList from '../../components/CardsList/';
import Loader from '../../components/Loader';
import Select from '../../components/Select';
import { mockOptions } from '../../util/constants';

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

  function sortSearchResults(value: string) {
    console.log(value);
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
        variant="h1"
        content="Search RAWG Video Games"
        isPrimaryColor
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
      />
      <SearchCards handler={filter} />
      <Select label="Sort by:" required={true} options={mockOptions} handler={sortSearchResults} />
      {loading ? <Loader /> : <CardsList cards={isFullList ? localContext.default : filtedData} />}
    </MainContent>
  );
};

export default Home;
