import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';
import facebook from '@/assets/images/facebook.svg';
import instagram from '@/assets/images/instagram.svg';
import youtube from '@/assets/images/youtube.svg';
import close from 'src/assets/images/close.svg';

const ModalMenu = ({ modalVisible, setModalVisible }) => {
  return (
    <div className={cl(styles.modal, modalVisible && styles.modalActive)}>
      <div className={styles.modalMenu}>
        <a href="#about" onClick={() => setModalVisible(false)}>
          About us{' '}
        </a>
        <a href="#profile" onClick={() => setModalVisible(false)}>
          Profiles
        </a>
        <a href="#contact" onClick={() => setModalVisible(false)}>
          Get in touch
        </a>
        <div className={styles.modalIcons}>
          <a href="#" target="_blank">
            <img src={facebook.src} alt="" />
          </a>
          <a href="#" target="_blank">
            <img src={instagram.src} alt="" />
          </a>
          <a href="#" target="_blank">
            <img src={youtube.src} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.modalClose}>
        <img src={close.src} onClick={() => setModalVisible(false)} alt="" />
      </div>
    </div>
  );
};
export default ModalMenu;
