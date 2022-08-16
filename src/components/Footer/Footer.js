import React from 'react';
import styles from './Footer.module.css'
import signature from '../../images/signature.png'

function Footer(props) {
    return (
        <div>
            <div className={styles.line}></div>
            <img className={styles.logo} src={signature}/>
        </div>
    );
}

export default Footer;