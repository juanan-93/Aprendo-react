import React, { useState} from 'react';
import styles from "./Header.module.css";
import Menu from '../Menu';
import Title from '../Title';
import HamburgerButton from '../Hamburguer';

export default function Header() {

    return (

        <div className={styles.header}>
            <Title/>
            <HamburgerButton/>
            <Menu/>
        </div>
            
    );

}

