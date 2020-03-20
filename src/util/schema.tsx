import * as yup from 'yup';

const LoginSchema: yup.ObjectSchema = yup.object().shape({
  userName: yup.string().required('🔥Invalid user name.'),
  password: yup.string().min(4, '🔥At least four characters.'),
});

export default LoginSchema;
