import React, { useState } from 'react';
import DreamCar from '../../components/Home/DreamCar';
import styles from './Home.module.css';

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main className={styles.Home}>
        <DreamCar visible={visible} setVisible={setVisible} />
    </main>
  );
}
