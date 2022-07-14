import React from "react";
import styles from './Intro.module.css'
interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Intro({ visible, setVisible }: Props) {

    return (
        <><div className={styles.Intro}>
                        
            {visible ? <>
                <strong>Kim Chang Hui </strong>
                is a front end developer based on Korea.
                <br />
                On this page, you can look around his Works.
                <br />
                You&apos;ll see what he&apos;s like.
                <br />
                Hope you like him.
            </> : <button onClick={() => setVisible(!visible)}>Turn on</button>
            }
        </div>
        </>
    )
}