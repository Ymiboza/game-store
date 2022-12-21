import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/utils";
import { enumerate } from "../../components/utils";
import OrderItem from "../../components/order-item/order-item";
import styles from "./order-page.module.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }
  return (
    <div className={styles.order__page}>
      <div className={styles.order__page_left}>
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className={styles.order__page_right}>
        <div className={styles.order__page_total_price}>
          <span>
            {items.length}{" "}
            {enumerate(items.length, ["товар", "товара", "товаров"])} на сумму{" "}
            {calcTotalPrice(items)} $
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
