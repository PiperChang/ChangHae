import React, { useState } from 'react';
import DreamCar from '../../components/Home/DreamCar';
import Intro from '../../components/Home/Intro';
import Spinner from '../../components/common/Loading/Spinner';

import styles from './Home.module.css';

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <Spinner></Spinner>
      <div className={styles.Home}>
        <div className={styles.Car}>
          <DreamCar visible={visible} />
        </div>
        <Intro visible={visible} setVisible={setVisible} />
      </div>
    </main>
  );
}
