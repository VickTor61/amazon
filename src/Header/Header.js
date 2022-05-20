import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import amazon_logo from '../assets/amazon_logo.png'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

const handleAuthentication = () => {
  if (user) {
      auth.signOut();
  }
}
     
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={amazon_logo}
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchbox" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user.email: "Guest"}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns </span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
