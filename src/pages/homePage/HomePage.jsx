import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import "./homePage.style.scss";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const HomePage = () => {
  const { allItems } = useSelector((state) => state.cart);

  //   function addItemToCart() {}

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__ul__li">
            <Link to={"checkout"}>
              <ShoppingCartCheckoutOutlinedIcon fontSize="large" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="product__list">
        {allItems.map((el, index) => (
          <ProductCard key={index} product={el} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
