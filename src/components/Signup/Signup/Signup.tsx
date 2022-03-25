import {FC} from 'react';
import Form from '../Form/Form';

interface SignupProps {
  closeModal: () => void;
}

const Signup: FC<SignupProps>= ({ closeModal }) => {
  const handleRegister = (email:string, pass:string) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title='Register' />;
};

export default Signup;
