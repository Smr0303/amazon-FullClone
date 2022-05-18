import React from "react";
import "./Payment.css";
import CheckProduct from "./CheckProduct";

import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="paymentContainer">
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delievery Address </h3>
          </div>
          <div className="paymentAddress">
            <p>{user?user.email:"Hello Guest@amazon.com"}</p>
            <p>Kamploos colony</p>
            <p>Xostring Mars</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review Items and Delievery </h3>
          </div>
          <div className="paymentItems"> 
          {basket.map((ele,i)=>{
            return(
              <CheckProduct key={i}
              id={ele.id}
              title={ele.title}
              price={ele.price}
              image={ele.image}
              rating={ele.rating}/>
            )
          })}
          </div>
        </div>
        <div className="paymentSection">
        <div className="paymentTitle">
            <h3>Payment Method </h3>
          </div>
          <div className=''></div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
