import React from 'react';
const Item = ({ cart, removeFromCart,addToCart}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="added-items">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="item">
          <img src={item.image} alt="" />
          <h3 className='desc'>{item.title}</h3>
         <div className="price-quantity">
          <p className='price'>$ {item.price}</p>
      <div className="quantity">
      <button onClick={() =>removeFromCart(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() =>addToCart(item)}>+</button>
      </div>
         </div>
        </div>
      ))}
      <div className='total'><h3>Total:</h3><h3> $ {total}</h3></div>
    </div>
  );
};

export default Item;
