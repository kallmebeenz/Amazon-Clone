import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { deleteUserOrders, setUser, updateUserOrders } from "../redux/actions";

function Orders() {
  const user = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.userInfo);
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const extStoreOrders = JSON.parse(localStorage.getItem(`charles_amazon_clone_user_${user.uid}`)) || {};
      const orders = extStoreOrders.orders || [];

      if (orders.length < userInfo.orders.length) { // Change this line
        localStorage.setItem(
          `charles_amazon_clone_user_${user.uid}`,
          JSON.stringify(userInfo)
        );

        setOrders(orders);
      }
    }
  }, [user, userInfo]);

  useEffect(() => {
    if (user) {
      dispatch(updateUserOrders(orders));
    } else {
      setOrders([]);
      dispatch(deleteUserOrders());
    }
  }, [user, orders]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      
      <div className="orders__order">
        {!user && "Sign In to see your orders"}
        {user && !orders.length && "Currently no orders"}
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
