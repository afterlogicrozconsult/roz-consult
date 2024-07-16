import React, { useState } from 'react';
import cl from 'classnames';
import { toast, ToastContainer } from 'react-nextjs-toast';

import arrow from '../../assets/images/arrow-down.svg';
import checkBoxDis from '../../assets/images/checkbox-dis.svg';
import checkBox from '../../assets/images/checkbox.svg';
import styles from './index.module.scss';

const Footer = ({ footer }) => {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!name) {
      toast.notify('Enter your name', {
        duration: 5,
        type: 'error',
        title: '',
      });
    } else if (!company) {
      toast.notify('Enter your company name', {
        duration: 5,
        type: 'error',
        title: '',
      });
    } else if (!reg.test(email)) {
      toast.notify('Enter a valid email, for example: example@mail.com', {
        duration: 5,
        type: 'error',
        title: '',
      });
    } else if (!message) {
      toast.notify('Enter message', {
        duration: 5,
        type: 'error',
        title: '',
      });
    } else {
      toast.notify('Subscribed successfully!', {
        duration: 5,
        type: 'success',
        title: '',
      });
      try {
        const url =
          'https://script.google.com/macros/s/AKfycbzrLnn-RqkmY6nxLOfp469gWagHIOylz0aJkEhJRlHXXBKyxdshY_eesV_8ZltzSwIz/exec';
        fetch(`${url}?name=${name}&company=${company}&email=${email}&message=${message}`);
      } catch (err) {
        console.log(err);
      }
      setName('');
      setCompany('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <footer className={styles.footer} id={'contact'}>
      <ToastContainer align={'right'} position={'bottom'} />
      <div className={styles.footerWrapper}>
        <a href={footer[0].privacyPolicy} className={cl(styles.footerRightPrivacy, styles.footerRightPrivacyMobile)}>
          Privacy policy
        </a>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerHeader}>Get in touch</h3>
          <input
            type="text"
            className={styles.footerInput}
            placeholder="NAME"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            className={styles.footerInput}
            placeholder="COMPANY"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
          <input
            type="text"
            className={styles.footerInput}
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            className={styles.footerInput}
            placeholder="MESSAGE"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <div className={styles.footerSubscription}>
            {check ? (
              <div className={styles.footerSubscriptionImg} onClick={() => setCheck(false)}>
                <img src={checkBox.src} alt="" />
              </div>
            ) : (
              <div className={styles.footerSubscriptionImg} onClick={() => setCheck(true)}>
                <img src={checkBoxDis.src} alt="" />
              </div>
            )}
            <div className={styles.footerAgree}>
              I agree with RozConsult <a href={footer[0].agree}>Terms of conditions</a>
            </div>
          </div>
          <button type="button" className={styles.footerBtn} onClick={handleSignUp} disabled={!check}>
            Submit my request
          </button>
        </div>
        <div className={styles.footerRight}>
          <h3 className={cl(styles.footerHeader, styles.footerHeaderRight)}>Contacts</h3>
          <div className={styles.footerRightInfo}>
            <div className={cl(styles.footerRightInner, styles.footerRightInnerTop)}>
              <h4 className={styles.footerSubTitle}>Address</h4>
              <span>{footer[0].address}</span>
              <span>{footer[0].email}</span>
              <span>{footer[0].phoneNumber}</span>
            </div>
            <div className={styles.footerRightInner}>
              <h4 className={styles.footerSubTitle}>Social</h4>
              <a href={footer[0].facebook}>Facebook</a>
              <a href={footer[0].twitter}>Twiter</a>
              <a href={footer[0].instagram}>Instagram</a>
            </div>
          </div>
          <a href={footer[0].privacyPolicy} className={styles.footerRightPrivacy}>
            Privacy policy
          </a>
        </div>

        <div className={styles.footerArrowDown}>
          <a href={'#header-id'}>
            <img src={arrow.src} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
