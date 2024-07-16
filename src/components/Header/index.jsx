import React from 'react';
import logo from 'src/assets/images/roz-logo.svg';
import burger from 'src/assets/images/burger.svg';
import styles from './index.module.scss';
const Header = ({ setModalVisible }) => {
  const handleBurger = () => {
    setModalVisible(true);
  };

  return (
    <header className={styles.header} id={'header-id'}>
      <div className={styles.headerImg}>
        <img src={logo.src} alt="" />
      </div>
      <div className={styles.headerBurger} onClick={handleBurger}>
        <img src={burger.src} alt="" />
      </div>
      <nav className={styles.headerNav}>
        <a href="#about">About Us</a>
        <a href="#profiles">Profiles</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
