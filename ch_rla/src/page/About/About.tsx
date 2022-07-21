import React from 'react';
import styles from './About.module.css';
import Likes from '../../components/About/Likes';
import Profile from '../../components/About/Profile';
export default function About() {
  return (
    <>
      <header>About</header>
      <main className={styles.Container}>
        <Profile />
        <Likes />
      </main>
    </>
  );
}
