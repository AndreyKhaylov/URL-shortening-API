import { Button } from '../';

import s from './FormShorten.module.scss';

const FormShorten = () => {
  return (
    <section className={s.section}>
      <div className='container'>
        <form className={s.form} autoComplete='off'>
          <input type='url' placeholder='Shorten a link here...' className={s.input} />
          <Button variant='square' type='submit'>
            Shorten it!
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormShorten;
