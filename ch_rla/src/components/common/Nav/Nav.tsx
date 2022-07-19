import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.Navigation}>
      <h1>Goals</h1>
      <ul>
        <Link to="/Work"><li>Work</li></Link>
        <Link to="/Thoughts"><li>Thoughts</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Comment"><li>Comment</li></Link>
      </ul>
    </nav>
  );
}
