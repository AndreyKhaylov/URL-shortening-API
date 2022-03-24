import {FC} from 'react';
import { features } from './data';

const s = require('./Features.module.scss') as any;

interface FeatureItemProps {
  title: string;
  body: string;
  icon: any;
}

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

const FeatureItem: FC<FeatureItemProps> = ({ title, body, icon }) => (
  <article className={s.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
);

export default Features;
