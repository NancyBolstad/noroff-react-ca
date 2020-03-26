import * as React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import InfoList from '../../components/InfoList';

interface Props {}

export const Success: React.FunctionComponent<Props> = () => {
  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="Thank you for getting in touched!"
        isPrimaryColor
      />
      <InfoList />
    </MainContent>
  );
};

export default Success;
