import styles from "./Sidebar.module.css";
import React, { useState } from "react";
import ShoeInventory from './ShoeInventory';

export default function Sidebar() {
  // State variables
  const [leftFootText, setLeftFootText] = useState("");
  const [leftFootLetters, setLeftFootLetters] = useState(0);
  const [rightFootText, setRightFootText] = useState("");
  const [rightFootLetters, setRightFootLetters] = useState(0);
  const [increasePrice, setIncreasePrice] = useState(0);

  // Constants
  const maxLetters = 10;
  let price = 84.50;
  let embellish = 7.50;

  // Event handler for left foot text input
  const handleLeftFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setLeftFootText(input);
    setLeftFootLetters(maxLetters - inputLength);

    if (inputLength > 0 && rightFootText.length > 0) {
      embellish *= 2;
      setIncreasePrice(price + embellish); // Increase price by $15 if both feet have text
    } else if (inputLength > 0 || rightFootText.length > 0) {
      setIncreasePrice(price + embellish); // Increase price by $7.50 if one foot has text
    } else {
      setIncreasePrice(price); // Reset the price if no foot has text
    }
  };

  // Event handler for right foot text input
  const handleRightFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setRightFootText(input);
    setRightFootLetters(maxLetters - inputLength);

    if (inputLength > 0 && leftFootText.length > 0) {
      embellish *= 2;
      setIncreasePrice(price + embellish); // Increase price by $15 if both feet have text
    } else if (inputLength > 0 || leftFootText.length > 0) {
      setIncreasePrice(price + embellish); // Increase price by $7.50 if one foot has text
    } else {
      setIncreasePrice(price); // Reset the price if no foot has text
    }
  };

  // Event handler to clear all foot text
  const handleClearAll = () => {
    setLeftFootText("");
    setLeftFootLetters(0);
    setRightFootText("");
    setRightFootLetters(0);
  };

  return (
    <div className={styles["sidebar-container"]}>

      {/* Sidebar Description */}
      <div className={styles.description}>
        <div className={styles.preHeader}>
          <div className={styles.productCategory}>
            <span>Originals</span>
          </div>
          <div>
          <button className={styles.reviewCount} >
          <span>★ ★ ★ ★ ★</span>
          <span className= {styles.reviews}>434</span>
          
          </button>
          </div>
        </div>
        <h1 className={styles.productTitle}>
          <span>ZX 5K BOOST SHOES</span>
        </h1>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <s>130 </s>
          </div>
          <div className={styles.discountPrice}>84.50</div>
        </div>
        <div className={styles.colorName}>
          Core Black / Core Black / Grey Six
        </div>
      </div>

      {/* Embellishment/Personalization */}
      <div className={styles.sideBarEmbellishments}>
        <span className={styles.heading}>Personalise</span>
        <p className={styles.embellishDescription}>
          Add name or number to personalise your adidas or to create the perfect gift!
        </p>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <label htmlFor={styles.leftShoeText} className={styles.input_label}></label>
            <div className={styles.inputBoxContainer}>
              <input
                id={styles.leftShoeText}
                name="leftShoeText"
                type="text"
                value={leftFootText}
                onChange={handleLeftFootChange}
                maxLength={maxLetters}
                className={styles.inputBox}
                role="textbox"
                placeholder="Left Foot"
              />
              <span className={styles.inputCount}>
                {leftFootLetters} / {maxLetters}
              </span>
            </div>
          </div>
          <div className={styles.input}>
            <label htmlFor={styles.rightShoeText} className={styles.input_label}></label>
            <div className={styles.inputBoxContainer}>
              <input
                id={styles.rightShoeText}
                type="text"
                value={rightFootText}
                onChange={handleRightFootChange}
                maxLength={maxLetters}
                className={styles.inputBox}
                placeholder="Right Foot"
              />
              <span className={styles.inputCount}>
                {rightFootLetters} / {maxLetters}
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <button className={styles.clearButton} onClick={handleClearAll}>
            Clear All
          </button>
          {leftFootLetters !== 0 || rightFootLetters !== 0 ? (
            <div>
              <span className={styles.priceTotal}>In total:</span>
              <span className={styles.embellishPrice}>
                £{price.toFixed(2)} + £{embellish.toFixed(2)} = £{increasePrice.toFixed(2)}
              </span>
            </div>
          ) : null}
        </div>
      </div>

    {/* Sizing */}
        <div>
        <ShoeInventory />
      </div>

      {/* Add To Bag */}
      <div id={styles.AddToBag} tabIndex="-1">
        <button type="button" className={styles.AddToBag} title="Add To Bag">
          <span className={styles.AddToBagTitle}>ADD TO BAG</span>
          <img className={styles.rtarrowicon} src="./public/img/arrow-right-svgrepo-com.svg" alt="Right Arrow Icon" />
        </button>
        <div className={styles.addWishListContainer}>
          <div className={styles.favContainer}>
            <img className={styles.favoriteIcon} src="./public/img/heart-icon.svg" alt="Favorite Icon" />
          </div>
        </div>
      </div>

      <div className = {styles.PayPalMessage} >
        <a href= "https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later" className = {styles.paypal}>
          <p className = {styles.ppDescription}>
            Pay in 3 interest-free payments on purchases from £30-£2,000 with 
            <img className = {styles.PayPallogo} src = "public/img/PayPalIcon.png"/>
            <span className = {styles.learn}> Learn more</span>
          </p>
        </a>
      </div>

      <div className = {styles.bottom}>
        <div className = {styles.delivery}>
          <img src = "./public/img/Delivery.png" className = {styles.deliveryPic}/>
          <span className = {styles.adiClub}>Free delivery for adiClub members.</span>
        </div>

        <div className = {styles.delvierypromotion}>
          <img src = "./public/img/FreeDel.png" className = {styles.freeDel}/>
          <span className = {styles.freeDel}>Free delivery to our adidas Store.</span>
        </div>
      </div>



    </div>
  );
}
