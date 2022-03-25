import {FC} from 'react';
import Form from '../Form/Form';

interface LoginProps {
  closeModal: () => void;
}
const Login: FC<LoginProps> = ({ closeModal }) => {
  const handleRegister = (email:string, pass:string) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title='Login' />;
};

export default Login;
