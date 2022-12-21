import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import Button from "../button/button";
import styles from "./game-buy.module.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const itemsInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    itemsInCart
      ? dispatch(deleteItemFromCart(game.id))
      : dispatch(setItemInCart(game));
  };

  return (
    <div className={styles.game__buy}>
      <span className={styles.game__buy_price}>{game.price} $</span>
      <Button
        type={itemsInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {itemsInCart ? "Убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
};

export default GameBuy;
