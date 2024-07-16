import React from 'react';
import cl from 'classnames';

import { urlFor } from '~/lib/client';
import styles from './index.module.scss';
const SectionInfo = ({ sectionInfo }) => {
  return (
    <div className={styles.sectionInfo} id={'about'}>
      <div className={cl(styles.sectionInfoBlock, styles.sectionInfoBlockTop)}>
        <div className={styles.sectionInfoText}>
          <h2 className={styles.sectionInfoTitle}>{sectionInfo[0].title1}</h2>
          <p className={styles.sectionInfoDescription}>{sectionInfo[0].description1}</p>
        </div>
        <div className={styles.sectionInfoImg}>
          <img src={urlFor(sectionInfo[0].image1)?.url()} />
        </div>
      </div>

      <div className={cl(styles.sectionInfoBlock, styles.sectionInfoBlockBottom)}>
        <div className={styles.sectionInfoImg}>
          <img src={urlFor(sectionInfo[0].image2)?.url()} />
        </div>
        <div className={cl(styles.sectionInfoText, styles.sectionInfoTextRight)}>
          <h2 className={styles.sectionInfoTitle}>{sectionInfo[0].title2}</h2>
          <p className={styles.sectionInfoDescription}>{sectionInfo[0].description2}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
