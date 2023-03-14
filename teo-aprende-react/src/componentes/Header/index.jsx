import React, { useState} from 'react';
import styles from "./Header.module.css";
import Header from './componentes/Menu';
import Header from './componentes/Header';

function Header() {

    return (

        <div className='header'>
            <Menu/>
        </div>
            
    );

}

export default Header;