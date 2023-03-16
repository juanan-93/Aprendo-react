import React, { useState} from 'react';
import styles from "./Title.module.css";


export default function Title({polla}) {

    return (

        <div className={styles.title}>

            <h1>{polla}</h1>
            
        </div>
            
    );

}

