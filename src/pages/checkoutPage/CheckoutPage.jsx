import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, emptyCart, addItem } from "../../redux/slices/cartSlice";

const CheckoutPage = () => {
  const { cartItems, totalPrice, allItems } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addItem(id));
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
    console.log("Item removed from the cart!");
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    console.log(cartItems),
    cartItems && cartItems.length > 0 ? (
      <div>
        <button onClick={handleEmptyCart}>Clear cart</button>
        {cartItems.map((el, index) => (
          <div key={index} className="checkout-items">
            <img src={el.imageUrl} alt="product" />
            <h6>{el.name}</h6>
            <button> - </button>
            <p>{el.quantity}</p>
            <button onClick={() => handleAddToCart(el.id)}> + </button>
            <button onClick={() => handleRemoveFromCart(el.id)}>x</button>
            <p>{el.price}</p>
          </div>
        ))}
        <p>TOTAL PRICE: ${totalPrice}</p>
        <p>Tax: ${totalPrice / 10}</p>
        <p>GRAND TOTAL: ${totalPrice + totalPrice / 10}</p>
      </div>
    ) : (
      <div>Cart is empty!</div>
    )
  );
};

export default CheckoutPage;
