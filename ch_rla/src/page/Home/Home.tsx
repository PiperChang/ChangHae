import React, { useState } from 'react';
import DreamCar from '../../components/Home/DreamCar';
import Intro from '../../components/Home/Intro';
export default function Home() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <div style={{ height: '90vh' }}>
        <DreamCar visible={visible}/>
      </div>
      <Intro/>
      <button onClick={() => setVisible(!visible)}>Turn on</button>
    </div>
  );
}
