import * as React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../../components/MainContent';
import CardDetails from '../../components/CardDetails';
import { Root } from '../../types/details';
import { API_BASE_URL, mockCardDetails } from '../../util/constants';
import useApi from '../../hooks/useApi';

interface Props {}

export const Details: React.FunctionComponent<Props> = () => {
  let { id } = useParams();
  const { data } = useApi<Root>({
    endpoint: API_BASE_URL,
    queryParams: id,
    fetchOnMount: true,
    initialData: mockCardDetails,
  });

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

export default Details;
