import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckProduct from "./CheckProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkoutTitle">You subtitle here</h2>
          {basket.map((ele,i) => {
            return (
              <CheckProduct key={i}
                id={ele.id}
                title={ele.title}
                price={ele.price}
                image={ele.image}
                rating={ele.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
