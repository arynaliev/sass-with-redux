import React from "react";
import PropTypes from "prop-types";
import "./productCard.style.scss";

const ProductCard = ({
  product: { name, price, imageUrl, stockCount, id },
}) => {
  return (
    <div className="product">
      <img
        className="product__img"
        width={"200px"}
        src={imageUrl}
        alt="product"
      />
      <h6 className="product__name">{name}</h6>
      <p className="product__price">{price}</p>
      {stockCount ? (
        <button className="product__btn product__btn_active">
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
