import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/games/reducer";
import GameBuy from "../game-buy/game-buy";
import GameCover from "../game-cover/game-cover";
import GameGenre from "../game-genre/game-genre";
import styles from "./game-item.module.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className={styles.game__item} onClick={handleClick}>
      <GameCover image={game.image} />
      <div className={styles.game__item_details}>
        <span className={styles.game__item_title}>{game.title}</span>
        <div className={styles.game__item_genre}>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={styles.game__item_buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
