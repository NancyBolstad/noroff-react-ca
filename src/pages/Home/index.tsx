import React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import { Result } from '../../types/data';
import SearchCards from '../../components/SearchCards/SearchCards';
import CardsList from '../../components/CardsList/';
import Loader from '../../components/Loader';
import Select from '../../components/Select';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [currentData, setCurrentData] = React.useState<Result[]>([]);
  const [filtedData, setFilterData] = React.useState<Result[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  function filter(value: string) {
    setLoading(true);
    const lowerCaseSearchValue = value.toLowerCase();
    const newArray: Result[] = localContext.default.filter(element => {
      const lowerGameName = element.name.toLowerCase();
      return lowerGameName.startsWith(lowerCaseSearchValue);
    });
    setFilterData(newArray);
    setLoading(false);
  }

  function sortSearchResults(value: string) {
    setLoading(true);
    if (value === 'popularity') {
      const sorted: Result[] = [...currentData].sort((a, b) => {
        return b.rating - a.rating;
      });
      setCurrentData(sorted);
    }

    if (value === 'alphabetically') {
      const sorted: Result[] = [...currentData].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setCurrentData(sorted);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, [loading]);

  React.useEffect(() => {
    console.log(1111111);
    setCurrentData(localContext.default);
  }, [localContext]);

  React.useEffect(() => {
    if (!!filtedData) {
      setCurrentData(filtedData);
    }
  }, [filtedData]);

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
      <Select
        label="Sort by:"
        options={[
          {
            value: 'alphabetically',
            label: 'Alphabetically',
          },
          {
            value: 'popularity',
            label: 'Popularity',
          },
        ]}
        handler={sortSearchResults}
      />
      {loading ? <Loader /> : <CardsList cards={currentData} />}
    </MainContent>
  );
};

export default Home;
