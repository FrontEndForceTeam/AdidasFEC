import React, { useEffect, useState } from "react";
import styles from "./PreHeader.module.css";

export default function PreHeader() {
  const [preheaderDetails, setPreheaderDetails] =
    useState("RETURNS & EXCHANGE");
  const [isFirstValue, setIsFirstValue] = useState(true);
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstValue((prevValue) => !prevValue);
      setIsFadeIn(true);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setPreheaderDetails(
      isFirstValue ? "RETURNS & EXCHANGE" : "FREE DELIVERIES ON ORDERS OVER £25"
    );
    setIsFadeIn(false);
  }, [isFirstValue]);

  return (
    <header className={styles["preheader-container"]}>
      <div
        className={`${styles["preheader-details-container"]} ${
          isFadeIn && styles.fadeIn
        }`}
      >
        <h4
          className={`${styles["preheader-details"]} ${
            isFadeIn && styles.fadeIn
          }`}
        >
          {preheaderDetails}
        </h4>
        <img
          className={`${styles["arrow-down"]} ${isFadeIn && styles.fadeIn}`}
          src="./img/arrow-down-white.svg"
          alt="arrow-down"
        />
      </div>
    </header>
  );
}
