import React from 'react'
import styles from '../styles/header.module.css'

import LoginLogout from './LoginLogout';
import Cart from '../components/Cart';
import PcLoginLogout from './PcLoginLogout';


const PcHeaderIcons = () => {
    return (
        <div className={styles.pcHeaderIconsContainer}>
            <PcLoginLogout />
            <Cart />
        </div>
    )
}

export default PcHeaderIcons

