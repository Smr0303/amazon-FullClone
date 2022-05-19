import React from "react";
import "./Order.css";
import CheckProduct from "./CheckProduct";

function Order({ order }) {

  return (
    <div className="order">
      <h2>Order</h2>
        
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((ele,i)=>(

          <CheckProduct
                      key={i}
                      id={ele.id}
                      title={ele.title}
                      price={ele.price}
                      image={ele.image}
                      rating={ele.rating}
                    />
          
      )
      
      )}
    </div>
  );
}

export default Order;
