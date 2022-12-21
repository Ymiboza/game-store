import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../cart-block/cart-block";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.header__store_title}>
          Game Store
        </Link>
      </div>
      <div className={styles.wrapper + " " + styles.header__cart_btn_wrapper}>
        <CartBlock/>
      </div>
    </div>
  );
};

export default Header;
