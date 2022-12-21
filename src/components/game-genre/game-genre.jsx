import React from 'react'
import styles from './game-genre.module.css'

const GameGenre = ({genre}) => {
  return (
    <span className={styles.game__genre}>{genre}</span>
  )
}

export default GameGenre