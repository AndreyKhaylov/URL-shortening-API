import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import useMatchMedia from 'use-match-media-hook';

import Menu from './Menu/Menu';
import { Modal, Signup, Login } from '../';

import s from './NavBar.module.scss';
import logo from '../../img/logo.svg';

const menuList = [
  {
    url: '#Features',
    text: 'Features',
  },
  {
    url: '#Prices',
    text: 'Prices',
  },
  {
    url: '#Resources',
    text: 'Resources',
  },
];

const queries = ['(max-width: 766px)', '(min-width: 767px)'];

function NavBar() {
  const [mobile] = useMatchMedia(queries);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <>
      <header className={`${s.navbar} container`}>
        <img src={logo} alt='logo' className={s.logo} />
        {mobile ? (
          <IoMenu className={s.burger} onClick={() => setShowMobileMenu(!showMobileMenu)} />
        ) : (
          <Menu links={menuList} handleSignup={openSignup} handleLogin={openLogin} />
        )}
        <AnimatePresence>
          {showMobileMenu && mobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={s.mobileMenu}>
              <Menu links={menuList} handleSignup={openSignup} handleLogin={openLogin} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Modal open={isSignupOpen} title='Sign Up' handleClose={closeSignup}>
        <Signup closeModal={closeSignup} />
      </Modal>
      <Modal open={isLoginOpen} title='Sign In' handleClose={closeLogin}>
        <Login closeModal={closeLogin} />
      </Modal>
    </>
  );
}

export default NavBar;
