import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import moment from 'moment';
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
function Orders() {
  const [orders, setOrders] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
      if (user) {
          db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .onSnapshot((snapshot) => {
              setOrders(
                  snapshot.docs.map((doc) => ({
                      id: doc.id,
                      data: doc.data(),
                    }))
                    );
                });
              
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h2> Your Orders</h2>
      <div className="OrdersOrder">
        {orders?.map((order,i) => 
          <Order key={i} order={order} />
        )}
      </div>
    </div>
  );
}

export default Orders;
