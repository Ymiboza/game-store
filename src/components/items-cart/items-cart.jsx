import React from 'react'
import styles from './items-cart.module.css'

const ItemsCart = ({quantity = 0}) => {
  return quantity > 0 ? (
    <div className={styles.items__cart}>
        {quantity}
    </div>
  ) : null
}

export default ItemsCart