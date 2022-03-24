import {FC} from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '../';

const s = require('./Modal.module.scss') as any;

interface ModalProps {
  open: () => boolean;
  handleClose: () => boolean;
  title: string;
}

const overlayVariants = {
  opened: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const modalVariants = {
  opened: {
    opacity: 1,
    transform: 'translate(-50%, 0%)',
  },
  closed: {
    opacity: 0,
    transform: 'translate(-50%, 20%)',
  },
};

const Modal: FC<ModalProps> = (props) => {
  const { open=false, handleClose, title, children } = props;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={s.overlay}
            onClick={handleClose}
            initial='closed'
            animate='opened'
            exit='closed'
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className={s.modal}
            initial='closed'
            animate='opened'
            exit='closed'
            variants={modalVariants}
            transition={{ duration: 0.2 }}>
            {title && (
              <header>
                <h2>{title}</h2>
              </header>
            )}
            <div className={s.modalContent}>{children}</div>
            <div className={s.modalAction}>
              <Button className='close' onClick={handleClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
