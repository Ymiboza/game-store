import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import GameCover from "../game-cover/game-cover";
import styles from './order-item.module.css'

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className={styles.order__item}>
      <div className={styles.order__item_cover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.order__item_title}>
        <span> {game.title} </span>
      </div>
      <div className={styles.order__item_price}>
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
export default OrderItem;
