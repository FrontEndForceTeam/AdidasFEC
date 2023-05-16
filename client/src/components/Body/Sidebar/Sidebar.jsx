import styles from "./Sidebar.module.css";
import React, { useState } from 'react';

export default function Sidebar() {

  const [leftFootText, setLeftFootText] = useState('');
  const [leftFootLetters, setLeftFootLetters] = useState("");
  const [rightFootText, setRightFootText] = useState('');
  const [rightFootLetters, setRightFootLetters]= useState('');
  const maxLetters = 10;

  const handleLeftFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setLeftFootText(input);
    setLeftFootLetters(maxLetters - inputLength);
  };

  const handleRightFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setRightFootText(input);
    setRightFootLetters(maxLetters - inputLength);
  };

  const handleClearAll = () => {
    setLeftFootText('');
    setLeftFootLetters(0);
    setRightFootText('');
    setRightFootLetters(0);
  };

  return (
    <div className={styles['sidebar-container']}>

      {/*Sidebar Description */}
      <div className={styles.description}>
        <div className={styles.preHeader}>
          <div className={styles.productCategory}>
            <span>Originals</span>
          </div>
          <button className={styles.reviewCount} link=".ProductInfo/reviews">* * * * *  434</button>
        </div>

        <h1 className={styles.productTitle}>
          <span>ZX 5K BOOST SHOES</span>
        </h1>
        <div className={styles.priceWrapper}>
          <div className={styles.price}><s>130 </s></div>
          <div className={styles.discountPrice}>84.50</div>
        </div>
        <div className={styles.colorName}>Core Black / Core Black / Grey Six</div>
      </div>


     { /*/Embellishment/Personalization*/}
      <div className={styles.sideBarEmbellishments}>
        <span>Personalise</span>
        <p className={styles.embellishDescription}>Add name or number to personalise your adidas or to create the perferct gift!</p>
        <div>

          <div>
              Left foot
              <input
                type="text"
                value={leftFootText}
                onChange={handleLeftFootChange}
                maxLength={maxLetters}
              />
            <span>{leftFootLetters} / {maxLetters}</span>
          </div>

          <div>
              Right foot
             <input
                type="text"
                value={rightFootText}
                onChange={handleRightFootChange}
                maxLength={maxLetters}
              />
            <span>{rightFootLetters} / {maxLetters}</span>
          </div>
      </div>

      <button onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
    // </div>
  );
}
