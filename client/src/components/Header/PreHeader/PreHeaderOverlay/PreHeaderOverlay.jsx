import React, { useEffect, useState } from 'react';
import styles from './PreHeaderOverlay.module.css';

export default function PreHeaderOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleCloseClick = () => {
    setIsOverlayVisible(false);
  };

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayVisible]);

  return (
    <>
      {isOverlayVisible && (
        <div className={styles['overlay-wrapper']}>
          <div className={styles['panel-content-container']}>
            <div className={styles['close-icon-container']}>
              <div className={styles['close-btn-box']}>
                <span className={styles['close-btn']} onClick={handleCloseClick}>
                  &times;
                </span>
              </div>
            </div>
            <div className={styles['panel-para-container']}>
                <div className={styles['para-one-contaner']}>
                    <h4 className={styles['title-one']}>FREE DELIVERY ON ORDERS OVER £25</h4>
                    <div className={styles['content-container-one']}>
                        <p>Spend over £25 and your delivery is FREE!</p>
                        <p>For more info, our Help pages on the site answer all FAQs about delivery.</p>
                    </div>
                    <h5><a href="#">LEARN MORE</a></h5>
                </div>
                <div className={styles['para-two-container']}>
                    <div className={styles['content-container-two']}>
                        <h4 className={styles['title-two']}>RETURNS & EXCHANGE</h4>
                        <p>Exchange or Return item(s) within 30 days</p>
                        <p>Customised products cannot be returned.</p>
                    </div>
                    <h5><a href="#">READ MORE ON RETURN</a></h5>
                    <h5><a href="#">READ MORE ON EXCHANGE</a></h5>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

