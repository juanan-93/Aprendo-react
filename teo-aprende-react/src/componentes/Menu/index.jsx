import React, {useEffect, useState} from 'react';
import styles from  './Menu.module.css';

export default function Menu() {

  return (
    <div className={styles.menu}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}