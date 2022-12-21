import React, { useCallback, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartMenu from "../cart-menu/cart-menu";
import ItemsCart from "../items-cart/items-cart";
import { calcTotalPrice } from "../utils";
import styles from "./cart-block.module.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const [isCardMenuVisible, setIsCardMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCardMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className={styles.cart__block}>
      <ItemsCart quantity={items.length} />
      <BiCartAlt
        color="white"
        size={30}
        className={styles.cart__icon}
        onClick={() => setIsCardMenuVisible(!isCardMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={styles.cart__block_total_price}>{totalPrice} $</span>
      ) : null}
      {isCardMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
