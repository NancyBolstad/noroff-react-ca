import * as React from 'react';
import HomeContent from '../../components/HomeContent';
import LoginForm from '../../components/LoginForm';

interface Props {}

export const Login: React.FunctionComponent<Props> = () => {
  return (
    <>
      <HomeContent>
        <LoginForm />
      </HomeContent>
    </>
  );
};

export default Login;
