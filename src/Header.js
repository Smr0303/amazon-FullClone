import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <Link to="/login">
          <div className="headerOption">
            <span className="headerOptionLineOne">Hello Guest</span>
            <span className="headerOptionTwo">Sign In</span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Return</span>
          <span className="headerOptionTwo">& Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <div className="headerOptionTwo headerBasketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
