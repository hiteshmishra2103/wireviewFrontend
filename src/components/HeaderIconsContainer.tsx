import React from 'react'
import styles from '../styles/header.module.css'

import LoginLogout from './LoginLogout';
import Cart from '../components/Cart';
import Login from './Login';
import Signup from './Signup';
import { useRecoilValue } from 'recoil';
import formStyles from '../styles/signup.module.css'
import { openSigninModal, openSignupModal } from '@/lib/utils/modal';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/store/atoms/user';
import { useRouter } from 'next/router';


const HeaderIconsContainer = () => {
    const user = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
    const router = useRouter();
    return (
        <div className={styles.headerIconsContainer}>
            {user.user ? (
                <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => {
                    localStorage.setItem("token", null);
                    setUser({
                        user: '',
                        isLoading: true,
                    });
                    router.push('/');
                }}>Logout</button>
            ) : (
                <>
                    <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => openSigninModal()}>Login</button>
                    <Login />
                    <button className={`${styles.btn} ${formStyles.openSignupModal} ${styles.signupBtn}`} onClick={() => openSignupModal()}>Sign up</button>
                    <Signup />
                </>
            )}
            <Cart />
        </div>
    )
}

export default HeaderIconsContainer

