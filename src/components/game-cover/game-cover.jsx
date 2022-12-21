import React from "react";
import styles from './game-cover.module.css'

const GameCover = ({ image = "" }) => {
  return (
    <div className={styles.game__cover} style={{ backgroundImage: `url(${image})` }} />
  );
};

export default GameCover;
