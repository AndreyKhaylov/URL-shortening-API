import { Button } from '../Button/Button';
import s from './ShortenItem.module.scss';

const ShortenItem = () => {
  const links = [];

  if (!links?.length) return null;

  return (
    <section className={s.Shorten}>
      <div className='container'>
        {links.map((item) => (
          <div key={item.code} className={s.item}>
            <span>{item.original_link}</span>
            <span>{item.full_short_link2}</span>
            <Button variant='square'>Copy</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortenItem;
