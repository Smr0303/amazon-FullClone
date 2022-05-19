import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
function Orders() {
  const [orders, setOrders] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
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
  }, []);

  return (
    <div className="orders">
      <h2>Orders</h2>
    </div>
  );
}

export default Orders;
