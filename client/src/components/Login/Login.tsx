import axios from 'axios';
import React from 'react';
import styles from './Login.module.css';

interface Props {
  isShowLogin: boolean;
  handleLoginClick: () => void;
}

export default function Login({ isShowLogin, handleLoginClick }: Props) {


  return (
    <div
      className={`${isShowLogin ? styles.ActiveLogin : styles.InactiveLogin}`}
    >
      <div className={styles.OuterBox} onClick={handleLoginClick}></div>
      <div className={`${styles.InnerContainer} `}>
        <div className={styles.login}>
          <div className={styles.form}>
            <form className="login-form">
              <span className="material-icons">Lock</span>
              <input
                type="text"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
              <input type="password" placeholder="password" required />
            </form>
            <button>login</button>
            <button className={styles.register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
