import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form, StyledInput, Label, StyledLabelText, ErrorMessage } from './styles';
import Button from '../Button';
import Heading from '../Heading';
import LoginSchema from '../../util/schema';

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: LoginSchema,
  });

  let history = useHistory();

  //@ts-ignore
  const onSubmit = data => {
    if (data.userName && data.password) {
      history.push('/profile');
    }
  };

  //@ts-ignore
  return (
    <>
      <Heading content="Login" isPrimaryColor />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <StyledLabelText>Username</StyledLabelText>
          <StyledInput type="text" name="userName" placeholder="Your username" ref={register} />
        </Label>
        {/* 
      // @ts-ignore */
        errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
        <Label>
          <StyledLabelText>Password</StyledLabelText>
          <StyledInput type="password" name="password" placeholder="Your password" ref={register} />
        </Label>
        {/* 
      // @ts-ignore */
        errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Button size="medium" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
