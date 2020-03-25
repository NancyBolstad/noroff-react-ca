import * as React from 'react';
import HomeContent from '../../components/HomeContent';
import ContactForm from '../../components/ContactForm';
import { Context } from '../../context/GlobalContext';

interface Props {}

export const Contact: React.FunctionComponent<Props> = () => {
  const { favorites } = React.useContext(Context);
  console.log(favorites);
  return (
    <>
      <HomeContent>
        <ContactForm />
      </HomeContent>
    </>
  );
};

export default Contact;
