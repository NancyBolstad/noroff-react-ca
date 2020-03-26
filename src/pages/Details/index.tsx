import * as React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../../components/MainContent';
import CardDetails from '../../components/CardDetails';
import { Root } from '../../types/details';
import { API_BASE_URL } from '../../util/constants';

interface Props {}

export const News: React.FunctionComponent<Props> = () => {
  const [data, setData] = React.useState<Root>();
  let { id } = useParams();

  React.useEffect(() => {
    async function getAllCards() {
      try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        const data: Root = await response.json();
        setData(data);

        console.log(data.platforms);

        return data;
      } catch (err) {
        throw err;
      }
    }
    getAllCards();
  }, [id]);
  return (
    <>
      <MainContent>
        {!!data && (
          <CardDetails
            title={data.name}
            image={data.background_image}
            description={data.description}
            websiteLink={data.website}
            genres={data.genres}
            platforms={data.platforms}
          />
        )}
      </MainContent>
    </>
  );
};

export default News;
