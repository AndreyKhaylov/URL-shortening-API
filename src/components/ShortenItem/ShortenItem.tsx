import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { AnimatePresence, motion} from 'framer-motion';

import { selectLinks } from '../../store/slice/LinkSlice';
import Button from '../Button/Button';

import s from './ShortenItem.module.scss';

const ShortenItem = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const links = useAppSelector(selectLinks);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    })
  };

  if (!links?.length) return null;

  return (
    <section className={s.Shorten}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div 
              className={s.item}
              data-active={copiedLink === item.full_short_link2}
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
            >
              <span>{item.original_link}</span>
              <span>
                <a href={item.full_short_link2} 
                    target="_blank"
                    rel="noreferrer"
                >
                  {item.full_short_link2}
                </a>
              </span>
              <Button 
                variant="square"
                onClick={() => copyToClipboard(item.full_short_link2)}
                >
                  {copiedLink === item.full_short_link2 ? 'Copied' : 'Copy'}
                </Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default ShortenItem;
