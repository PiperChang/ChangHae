import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.Navigation}>
      <h1>main</h1>
      <ul>
        <Link to="/Work"><li>Work</li></Link>
        <Link to="/"><li>Thoughts</li></Link>
        <Link to="/"><li>About</li></Link>
        <li>Love</li>
      </ul>
    </nav>
  );
}
