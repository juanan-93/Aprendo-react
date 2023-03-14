import React, { useState} from 'react';
import styles from "./Menu.module.css";

function Menu() {

    return (

        <div className='menu'>

            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>    
            </nav> 
        
        </div>
            
    );

}

export default Menu;