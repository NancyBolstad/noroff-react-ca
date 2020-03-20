import * as React from 'react';
import HomeContent from '../../components/HomeContent';
import ContactForm from '../../components/ContactForm';

interface Props {}

export const Contact: React.FunctionComponent<Props> = () => {
  return (
    <>
      <HomeContent>
        <ContactForm />
      </HomeContent>
    </>
  );
};

export default Contact;
