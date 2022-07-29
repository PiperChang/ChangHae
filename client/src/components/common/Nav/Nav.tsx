import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import Login from '../../Login/Login';

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
        <li className={styles.LoginButton}><button onClick={handleLoginClick}>Login</button></li>
      </ul>
    </nav>
  );
}


