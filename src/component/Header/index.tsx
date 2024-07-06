import React from 'react';
import styles from './header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                Рика и Морти
            </Link>
            <nav className={styles.nav}>
                <li className={styles.link}>
                    <Link className={styles.linkInner} to={'/hero'}>Hero</Link>
                </li>
                <li className={styles.link}>
                    <Link className={styles.linkInner} to={'/location'}>Location</Link>
                </li>
                <li className={styles.link}>
                    <Link className={styles.linkInner} to={'/episode'}>Episode</Link>
                </li>
            </nav>
        </div>
    );
};

export default Header;