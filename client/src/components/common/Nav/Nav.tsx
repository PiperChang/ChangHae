import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

interface Props {
  handleLoginClick: () => void
}

export default function Nav({ handleLoginClick }:Props) {
  
  return (
    <nav className={styles.Navigation}>
      <h1>Goals</h1>
      <ul>
        <Link to="/Work"><li>Work</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Comment"><li>Comment</li></Link>
        <button onClick={handleLoginClick} className={styles.LoginButton}>Login</button>
      </ul>
    </nav>
  );
}


