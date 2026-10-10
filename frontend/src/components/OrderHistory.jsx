
import { useState } from "react";

function OrderHistory() {
  const [orders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("orders") || "[]");
    } catch {
      return [];
    }
  });

  return (
    <div className="checkout-page">
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet. Your orders will appear here!</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "16px",
          }}>
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Name: {order.name}</p>
            <p>Address: {order.address}</p>
            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} × {item.quantity}
              </p>
            ))}
            <h3>Total: ₹{order.total}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
