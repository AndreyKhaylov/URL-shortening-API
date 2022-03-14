import Form from '../Form/Form';

const Login = ({ closeModal }) => {
  const handleRegister = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title='Login' />;
};

export default Login;
