import Form from '../Form/Form';

const Signup = ({ closeModal }) => {
  const handleRegister = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title='Register' />;
};

export default Signup;
