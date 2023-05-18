import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

const ShoeInventory = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shoeInventory, setShoeInventory] = useState([]);
  const [scarcity, setScarcity] = useState(false);

  useEffect(() => {
    fetchShoeInventory();
  }, []);

  const fetchShoeInventory = async () => {
    try {
      const response = await fetch("http://localhost:3010/api/shoe_inventory");
      const data = await response.json();
      setShoeInventory(data);
    } catch (error) {
      console.error("Error fetching shoe inventory:", error);
    }
  };

  const handleSizeClick = (size) => {
    if (size.quantity === 0) {
      setShowModal(true);
      setSelectedSize(size);
    } else if (size.quantity < 5) {
      setShowModal(false);
      setScarcity(true);
      console.log(`Selected size ${size.size}`);
    } else {
      setShowModal(false);
      setScarcity(false);
      console.log(`Selected size ${size.size}`);
    }
  };

  return (
    <div className={styles.buySection}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>Sizes</div>
      </div>
      <div className={styles.sizeSelector}>
  {shoeInventory.map((shoe, index) => (
    <React.Fragment key={shoe.size}>
      <button
  className={`${styles.sizeButton} ${selectedSize === shoe && shoe.quantity !== 0 ? styles.selectedSize : ''} ${shoe.quantity === 0 ? styles.outOfStock : ''}`}
  onClick={() => handleSizeClick(shoe)}
>
  {shoe.quantity === 0 && (
    <>
      {shoe.size}
      <img className = {styles.notificationIcon} src="./public/img/notification.jpg" alt="notification" />
     
    </>
  )}
  {shoe.quantity !== 0 && shoe.size}
</button>

    </React.Fragment>
  ))}
  
</div>
{scarcity && (
      <div className={styles.scarcityMessage}>Don't miss out, last items available.</div>
    )}
      {showModal && (
        <div className="modal">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => console.log(e.target.value)}
          />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
      <div className = {styles.sideControl}>
        <img className = {styles.ruler} src = "./public/img/ruler.jpg"/>
        <span className = {styles.sizeGuide}>Size guide</span>
      </div>
      <div className = {styles.fitGuidanceContainer}>
        <div className = {styles.sizeAdvice}>
          <img className= {styles.informationIcon} src = "./public/img/informationIcon.png"/>
          <p className = {styles.sizeAlert}>
            <span className = {styles.trueToSize}>True to size.</span>
            <span className = {styles.sizeRecommendation}>
              We recommend ordering your usual size.
            </span>

            </p>
        </div>
      </div>
    </div>
  );
};

export default ShoeInventory;
