import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img src={`../img/banner__img.jpg`} alt="Banner" className="home__img" />

      {/* product id, title, price, rating, image */}

      {/* Product */}

      <div className="home__row">
        <Product
          key="123445"
          id="123445"
          title="The lean startup: How constant innovation creates Radically successful businesses paperback"
          price={11.96}
          rating={3}
          image="../img/book.jfif"
        />

        <Product
          key="123446"
          id="123446"
          title="Ipad: 2021 apple designed ipad for professional developers"
          price={286.96}
          rating={4}
          image="../img/ipad-pro.jfif"
        />
      </div>
      <div className="home__row">
        <Product
          key="123447"
          id="123447"
          title="Tuxedo Watch: The big boy's watch made from organic materials"
          price={350.96}
          rating={5}
          image="../img/wristwatch.jfif"
        />

        <Product
          key="123448"
          id="123448"
          title="Armani Suit: Professionally designed armani suit for a great day at work"
          price={1199.96}
          rating={5}
          image="../img/armani-suit.jfif"
        />
        <Product
          key="123449"
          id="123449"
          title="Laptop: Dell Xps laptop with up-to-date features to suit your taste"
          price={499.96}
          rating={5}
          image="../img/dell-laptop.jfif"
        />
      </div>
      <div className="home__row">
        <Product
          key="123450"
          id="123450"
          title="Television: Latest 2021 samsung swiss winning led tv with molecular orientation"
          price={3000.96}
          rating={5}
          image="../img/samsung-tv.jfif"
        />
      </div>
    </div>
  );
}

export default Home;
