import React from "react";
import styles from "./cart-item.module.css";

const CartItem = ({ title, price, id }) => {
  return (
    <div className={styles.cart__item}>
      <span>{title} </span>
      <div className={styles.cart__item_price}>
        <span>{price} $</span>
      </div>
    </div>
  );
};

export default CartItem;
