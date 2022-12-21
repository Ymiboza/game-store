import React from "react";
import { calcTotalPrice } from "../utils";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import styles from "./cart-menu.module.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.cart__menu}>
      <div className={styles.cart__menu_games_list}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className={styles.cart__menu_arrange}>
          <div className={styles.cart__menu_total_price}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} $</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
