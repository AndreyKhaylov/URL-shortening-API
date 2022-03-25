import { FC, useState } from 'react';

import { Button } from '../../';

const s = require('./Form.module.scss') as any;

interface FormProps {
  title: string;
  handleClick: (email:string, pass:string) => void;
}

const Form: FC<FormProps> = ({ handleClick, title }) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  return (
    <div className={s.form}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <Button 
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </Button>
    </div>
  );
};

export default Form;
