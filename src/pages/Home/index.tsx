import React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import CardsList from '../../components/CardsList';
import { Root, Result } from '../../types/data';
import { API_BASE_URL } from '../../util/constants';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const [data, setData] = React.useState<Result[]>([]);

  async function getAllCards() {
    try {
      const response = await fetch(API_BASE_URL);
      const data: Root = await response.json();
      console.log(data);
      setData(data.results);

      return data;
    } catch (err) {
      throw err;
    }
  }

  React.useEffect(() => {
    getAllCards();
  },[]);

  return (
    <>
      <Heading content="Noroff React App" isPrimaryColor />
      <HomeContent>{!!data && <CardsList cards={data} />}</HomeContent>
    </>
  );
};

export default Home;
