import s from './Features.module.scss';

import { features } from './data';

const Features = () => {
  return (
    <section className={s.features}>
      <div className='container'>
        <h2 className={s.title}>{features.title}</h2>
        <p className={s.description}>{features.description}</p>
        <div className={s.items}>
          {features.items.map((item) => (
            <FeatureItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, body, icon }) => (
  <article className={s.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
);

export default Features;
