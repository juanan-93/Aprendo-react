import React from "react";
import styles from './HamburgerButton.module.css';
import { useState } from "react";



export default function HamburgerButton() {

  const [active, setActive] = useState(false);

  const hamburgerClass = active ? `${styles.hamburgerButton} ${styles.active}` : styles.hamburgerButton;

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className={hamburgerClass} onClick={handleClick}>

      <button>
        <span></span>
      </button>
      
    </div>
  );
}