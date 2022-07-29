import React from 'react'
import profile from '../../asset/profile/profile.jpg';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';
import styles from './Profile.module.css'
export default function Profile() {
  return (
    <article className={styles.Profile}>
    <section>
      <img src={profile} alt="Profile picture" />
      <div className={styles.Intro}>
        <strong>Kim Chang Hui </strong>
        is a software engineer based on Korea.
        <br />
        He loves many things. You&apos;ll
        see what he likes.
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
  )
}
