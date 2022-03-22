import { Button } from '../';

const s = require("./Top.module.scss") as any;
const Img = require("../../img/illustration-working.svg") as string;

const data = {
  title: 'More than just shorter links',
  description:
    'Build your brands recognition and get detailed insights on how your links are performing.',
};

const Top = () => {
  return (
    <section className={`${s.top} container`}>
      <div className={s.imgContainer}>
        <img className={s.img} src={Img} alt='top' />
      </div>
      <article className={s.text}>
        <h1 className={s.title}>{data.title}</h1>
        <p className={s.description}>{data.description}</p>
        <Button size='large'>
          Get Started
        </Button>
      </article>
    </section>
  );
};

export default Top;
