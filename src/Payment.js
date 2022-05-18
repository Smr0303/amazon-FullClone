import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckProduct from "./CheckProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
function Payment() {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [disabled, setDisabled] = useState("");
  const [{ basket, user }] = useStateValue();
  const [ClientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log(response);
      setClientSecret(response.data.ClientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);
    const payload= await stripe.confirmCardPayment(ClientSecret,{
      payment_method:{
        card:elements.getElement(CardElement),
      }
    }).then(({paymentIntent})=>{
      setSucceeded(true);
      setError(null);
      setProcessing(false); 
      history.replaceState('/orders');
    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="paymentContainer">
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delievery Address </h3>
          </div>
          <div className="paymentAddress">
            <p>{user ? user.email : "Hello Guest@amazon.com"}</p>
            <p>Kamploos colony</p>
            <p>Xostring Mars</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review Items and Delievery </h3>
          </div>
          <div className="paymentItems">
            {basket.map((ele, i) => {
              return (
                <CheckProduct
                  key={i}
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
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method </h3>
          </div>
          <div className="paymentDetails">
            <form  onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="paymentPriceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              <button disabled={processing || disabled || succeeded}>
                <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
              </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
