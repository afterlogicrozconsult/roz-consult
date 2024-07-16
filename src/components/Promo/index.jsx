import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';
import ModalMenu from '@/components/ModalMenu';
import image2 from '@/assets/images/img-paralax-2.png';
import image1 from '@/assets/images/img-paralax-1.png';
import image3 from '@/assets/images/img-paralax-3.png';
import { urlFor } from '~/lib/client';

const SectionPromo = ({ sectionPromo }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxTransform = (offset, speed) => `translateY(${-(scrollPosition - offset) * speed}px)`;

  return (
    <div className={styles.promo}>
      <ModalMenu modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <div className={styles.promoWrapper}>
        <Header setModalVisible={setModalVisible} />
        <div className={styles.promoInfo}>
          <h2 className={styles.promoTitle}>{sectionPromo[0].title}</h2>
          <p className={styles.promoDescription}>{sectionPromo[0].description}</p>
          <a href="#contact" className={styles.promoBtn}>
            {sectionPromo[0].btnTitle}
          </a>
        </div>
        <div className={styles.parallaxBlock}>
          <div className={styles.parallaxBlockImg1}>
            <img src={urlFor(sectionPromo[0].image1)?.url()} alt="" style={{ transform: parallaxTransform(0, 0.8) }} />
          </div>
          <div className={styles.parallaxBlockImg2}>
            <img src={urlFor(sectionPromo[0].image2)?.url()} alt="" style={{ transform: parallaxTransform(0, 0.3) }} />
          </div>
          <div className={styles.parallaxBlockImg3}>
            <img src={urlFor(sectionPromo[0].image3)?.url()} alt="" style={{ transform: parallaxTransform(0, 0.4) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPromo;
