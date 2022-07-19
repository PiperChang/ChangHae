import React from 'react';
import styles from './Intro.module.css';
import { ReactComponent as Rolls } from '../../asset/Rolls_royce.svg';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Intro({ visible, setVisible }: Props) {
  return (
    <>
      <div className={styles.Intro}>
        {visible ? (
          <>
            <div className={styles.logo}>
              <div style={{width:'100px', margin:'auto'}}>
                <Rolls />
              </div>
              <strong>Dream Car</strong>
              <br/>
              Rolls Royce ghost
              <p>kurojishi, CC-BY</p>
            </div>
          </>
        ) : (
          <button onClick={() => setVisible(!visible)}>Turn on</button>
        )}
      </div>
    </>
  );
}