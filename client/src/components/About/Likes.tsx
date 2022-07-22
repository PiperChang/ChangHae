import React, { useEffect, useState } from 'react';
import styles from './Likes.module.css';

export default function Likes() {
  const list = [
    {
      title: 'The Hangover',
      author: 'Todd Phillips',
      img: require('../../asset/Likes/hangover.jpg'),
      year: '2009',
    },
    {
      title: 'Joker',
      author: 'Todd Phillips',
      img: require('../../asset/Likes/joker.jpg'),
      year: '2019',
    },
    {
      title: 'The Bird That Drinks Blood',
      author: 'Lee Young-do',
      img: require('../../asset/Likes/피마새.jpg'),
      year: '2005',
    },
    {
      title: 'Night Visions',
      author: 'Imagine Dragons',
      img: require('../../asset/Likes/Night Visions.jpg'),
      year: '2012',
    },
    {
      title: 'Barbarian Quest',
      author: '백수귀족',
      img: require('../../asset/Likes/Barbarian Quest.jpg'),
      year: '2012',
    },
    {
      title: 'SKT (Swallow Knight Tales)',
      author: 'Kim Chul-gon',
      img: require('../../asset/Likes/SKT.jpg'),
      year: '2003',
    },
    {
      title: 'One Is Not a Lonely Word',
      author: 'Drunken Tiger',
      img: require('../../asset/Likes/dt.jpg'),
      year: '2004',
    },
  ];

  const [displayOn, setDisplayOn] = useState(-1);

  // mouse position
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // get mouse coordinates
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const likeslist = list.map((like, idx) => (
    <div
      key={idx}
      onMouseEnter={() => setDisplayOn(idx)}
      onMouseLeave={() => setDisplayOn(-1)}
    >
      {displayOn == idx ? <img src={like.img} style={{left:(coords.x), top:(coords.y - 100)}}/> : <></>}
      <h3>{like.title}</h3>
      <p>
        {like.author}, {like.year}
      </p>
    </div>
  ));

  return (
    <>
      <article className={styles.Container}>{likeslist}</article>
    </>
  );
}
