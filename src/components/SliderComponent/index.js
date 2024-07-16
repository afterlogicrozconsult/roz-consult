import { useState, useEffect, useRef } from 'react';
import { urlFor } from '~/lib/client';
import Slider from 'react-slick';

import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';
import styles from './index.module.scss';

export default function SliderComponent({ sectionSlider }) {
  const [stateArray, setStateArray] = useState([]);
  const [prevStateArray, setPrevStateArray] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(0);
  const cardStackRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // отображение 3 карточек
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // при ширине экрана до 1024 показывать по одной карточке
        },
      },
    ],
  };

  useEffect(() => {
    const cardStack = cardStackRef.current;
    let cardArray = [];
    for (let i = 0; i < cardStack.children.length; i++) {
      const cNum = i + 1;
      const cName = 'card' + cNum.toString();
      cardStack.children[i].classList.add(cName);
      cardArray.push(cNum);
    }
    setStateArray(cardArray);
  }, []);

  const stackRefreshLeft = () => {
    setPrevStateArray([...stateArray]);
    setStateArray(prev => {
      const newStateArray = [...prev];
      newStateArray.unshift(newStateArray.pop());
      return newStateArray;
    });
  };

  const stackRefreshRight = () => {
    setPrevStateArray([...stateArray]);
    setStateArray(prev => {
      const newStateArray = [...prev];
      newStateArray.push(newStateArray.shift());
      return newStateArray;
    });
  };

  useEffect(() => {
    const updateCardStack = () => {
      const cardStack = document.getElementsByClassName('card');
      for (let i = 0; i < cardStack.length; i++) {
        const cName = 'card' + prevStateArray[i]?.toString();
        const cNameNew = 'card' + stateArray[i]?.toString();
        cardStack[i].classList.remove(cName);
        cardStack[i].classList.add(cNameNew);
      }
    };

    updateCardStack();
  }, [prevStateArray, stateArray, currentTitle]);

  const nextCardLeft = async () => {
    await stackRefreshLeft();
    if (currentTitle < sectionSlider.length - 1) {
      setCurrentTitle(currentTitle + 1);
    } else {
      setCurrentTitle(0);
    }
  };

  const nextCardRight = async () => {
    await stackRefreshRight();
    if (currentTitle > 0) {
      setCurrentTitle(currentTitle - 1);
    } else {
      setCurrentTitle(sectionSlider.length - 1);
    }
  };

  return (
    <>
      <div className={styles.cardWrapper} id={'profiles'}>
        <div className={styles.cardRight}>
          <div>
            <div className={styles.cardTitle}>{sectionSlider[currentTitle]?.title}</div>
            <div className={styles.cardPosition}>{sectionSlider[currentTitle]?.position}</div>
            <div className={styles.cardDescription}>{sectionSlider[currentTitle]?.description}</div>
          </div>
          <div className={styles.cardArrows}>
            <div className={styles.cardArrowLeft} onClick={nextCardRight}>
              <img src={arrowLeft.src} alt="" />
            </div>
            <div className={styles.cardArrowRight} onClick={nextCardLeft}>
              <img src={arrowRight.src} alt="" />
            </div>
          </div>
        </div>
        <div className="card-stack" ref={cardStackRef}>
          {sectionSlider.map(card => (
            <div
              className="card"
              key={card.title}
              style={{ backgroundImage: `url(${urlFor(card.image)?.url()})` }}
            ></div>
          ))}
        </div>
      </div>

      <div id={'profile'}>
        <Slider {...settings} className={styles.slider}>
          {sectionSlider.map((slide, index) => (
            <div key={index}>
              <div className={styles.sliderTitle}>{slide?.title}</div>
              <div className={styles.sliderPosition}>{slide?.position}</div>
              <div className={styles.sliderImg}>
                <img src={urlFor(slide.image)?.url()} alt="" />
              </div>
              <div className={styles.sliderDescription}>{slide?.description}</div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
