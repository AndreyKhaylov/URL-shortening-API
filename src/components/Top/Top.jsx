import { Button } from '../';

import s from './Top.module.scss';
import Img from '../../img/illustration-working.svg';

const data = {
  title: 'More than just shorter links',
  description:
    'Build your brands recognition and get detailed insights on how your links are performing.',
};

const Top = () => {
  return (
    <section className={`${s.Top} container`}>
      <div className={s.imgContainer}>
        <img src={Img} alt='top' className={s.img} />
      </div>
      <article className={s.text}>
        <h1 className={s.title}>{data.title}</h1>
        <p className={s.description}>{data.description}</p>
        <Button size='large' variant='primary'>
          Get Started
        </Button>
      </article>
    </section>
  );
};

export default Top;
