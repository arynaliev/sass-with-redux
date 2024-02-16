import React from "react";
import PropTypes from "prop-types";
import "./productCard.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, emptyCart } from "../../redux/slices/cartSlice";

const ProductCard = ({
  product: { name, price, imageUrl, stockCount, id },
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(id));
    console.log("Item added to the cart!");
  };

  return (
    <div className="product">
      <img
        className="product__img"
        width={"200px"}
        src={imageUrl}
        alt="product"
      />
      <div className="product__name__price">
        <h6 className="product__name">{name}</h6>
        <p className="product__price">{price}</p>
      </div>
      {stockCount ? (
        <button
          className="product__btn product__btn_active"
          onClick={handleAddToCart}
        >
          Add To cart
        </button>
      ) : (
        <button className="product__btn product__btn_muted">
          Out of stock
        </button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  stockCount: PropTypes.number,
};

export default ProductCard;
