import React, { useState } from "react";
import styles from "./AccordionButton.module.css";

const AccordionButton = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["content"]}>
      <button onClick={handleClick}>{title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionButton;
