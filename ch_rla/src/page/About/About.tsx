import React from 'react';
import profile from '../../asset/profile/profile.jpg';
import styles from './About.module.css';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';
import Likes from '../../components/About/Likes';

export default function About() {
  return (
    <>
      <header>About</header>
      <main className={styles.Container}>
        <article className={styles.Profile}>
          <section>
            <img src={profile} alt="Profile picture" />
            <div className={styles.Intro}>
              <strong>Kim Chang Hui </strong>
              is a software engineer based on Korea.
              <br />
              <br />
              He loves many things. And These are the best of those. You&apos;ll
              see what he likes.
              <br />
              <br />
              Hope you enjoy it too.
            </div>
          </section>
          <section className={styles.Contact}>
            <a href="mailto: goddhqj8000@ajou.ac.kr">
              <MdEmail size={'2rem'} />
            </a>
            <a href="https://github.com/PiperChang">
              <FaGithubAlt size={'2rem'} />
            </a>
            <a href="https://www.instagram.com/ch_rla/">
              <AiFillInstagram size={'2rem'} />
            </a>
          </section>
        </article>
        <Likes />
      </main>
    </>
  );
}
