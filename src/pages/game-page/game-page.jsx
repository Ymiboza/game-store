import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../components/game-buy/game-buy";
import GameCover from "../../components/game-cover/game-cover";
import GameGenre from "../../components/game-genre/game-genre";
import styles from "./game-page.module.css";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
    console.log('game', game);
  if (!game) return null;

  return (
    <div className={styles.game__page}>
      <h1 className={styles.game__page_title}>{game.title}</h1>
      <div className={styles.game__page_content}>
        <div className={styles.game__page_left}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.game__page_right}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={styles.secondary__text}>
            Популярные метки для этого продукта:
          </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={styles.game__page_buy_game}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
