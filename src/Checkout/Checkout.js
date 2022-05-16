import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  const visibility = {
    transform: "translateX(-100%)",
    opacity: 0.1
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        {basket?.length === 0 ? (
          <div className="empty__basket">
            <h2>Your Shopping Basket is empty</h2>

            <p>
              You have no item in your basket. To buy one, click "Add to basket"
              next to the item
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello {user?.email}</h3>
            <h2>Your Shopping Basket</h2>

            {/*  List out all of the checkout Products */}
            <FlipMove
              enterAnimation={{ from: visibility, to: {} }}
              leaveAnimation={{ from: visibility, to: {} }}
            >
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
