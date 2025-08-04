import React, { useState, useEffect } from 'react';
import ItemsCard from './ItemsCard';
import styles from './Cart.module.css';

const Cart = ({ setcartcount, cartcount }) => {
  const [cartitem, setcartitems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("itemData")) || { cart: [] };
    setcartitems(data.cart);

    const total = data.cart.reduce((sum, item) => {
      const price = Number((item.price || item.Price || "₹0").replace(/[^\d]/g, ""));
      return sum + price;
    }, 0);

    const event = new CustomEvent("updateTotalPrice", { detail: total });
    window.dispatchEvent(event);
  }, []);

  
  const handleRemove = (indexToRemove, itemToRemove) => {
    const data = JSON.parse(localStorage.getItem("itemData")) || { cart: [] };
    const updatedCart = data.cart.filter((_, index) => index !== indexToRemove);
    data.cart = updatedCart;
    localStorage.setItem("itemData", JSON.stringify(data));
    setcartitems(updatedCart);
    setcartcount(prev => prev - 1);

    
    const total = updatedCart.reduce((sum, item) => {
      const price = Number((item.price || item.Price || "₹0").replace(/[^\d]/g, ""));
      return sum + price;
    }, 0);
    const event = new CustomEvent("updateTotalPrice", { detail: total });
    window.dispatchEvent(event);
  };

  return (
    <div className={styles.itemList}>
      {cartitem.length === 0 ? (
        <p>You have not added any item to Cart.</p>
      ) : (
        cartitem.map((item, index) => (
          <div key={index} className={styles.itemsCard}>
            <ItemsCard
              itemname={item.itemname}
              imageURL={item.imageURL}
              quantity={item.quantity}
              price={item.Price}
              iscartAdded={true} 
              togglecar={() => handleRemove(index, item)} 
              hideButtons={false}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
