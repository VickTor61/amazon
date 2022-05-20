import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "../assets/banner__img.jpg";
import book from '../assets/book.jfif';
import armani_suit from '../assets/armani-suit.jfif';
import dell_laptop from '../assets/dell-laptop.jfif';
import ipad from '../assets/ipad-pro.jfif';
import samsung_tv from '../assets/samsung-tv.jfif'
import wristwatch from '../assets/wristwatch.jfif'

function Home() {
  return (
    <div className="home">
      <img src={banner} alt="Bannerr" className="home__img" />

      {/* product id, title, price, rating, image */}

      {/* Product */}

      <div className="home__row">
        <Product
          key="123445"
          id="123445"
          title="The lean startup: How constant innovation creates Radically successful businesses paperback"
          price={11.96}
          rating={3}
          image={book}
        />

        <Product
          key="123446"
          id="123446"
          title="Ipad: 2021 apple designed ipad for professional developers"
          price={286.96}
          rating={4}
          image={ipad}
        />
      </div>
      <div className="home__row">
        <Product
          key="123447"
          id="123447"
          title="Tuxedo Watch: The big boy's watch made from organic materials"
          price={350.96}
          rating={5}
          image={wristwatch}
        />

        <Product
          key="123448"
          id="123448"
          title="Armani Suit: Professionally designed armani suit for a great day at work"
          price={1199.96}
          rating={5}
          image={armani_suit}
        />
        <Product
          key="123449"
          id="123449"
          title="Laptop: Dell Xps laptop with up-to-date features to suit your taste"
          price={499.96}
          rating={5}
          image={dell_laptop}
        />
      </div>
      <div className="home__row">
        <Product
          key="123450"
          id="123450"
          title="Television: Latest 2021 samsung swiss winning led tv with molecular orientation"
          price={3000.96}
          rating={5}
          image={samsung_tv}
        />
      </div>
    </div>
  );
}

export default Home;
