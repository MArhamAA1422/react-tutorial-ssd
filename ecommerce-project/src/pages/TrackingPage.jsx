import { Link, useParams } from "react-router";
import { Header } from "../components/Header";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(
    function () {
      const fetchOrders = async function () {
        const response = await axios.get(
          `/api/orders/${orderId}?expand=products`
        );
        setOrder(response.data);
      };

      fetchOrders();
    },
    [orderId]
  );

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find(function (productItem) {
    if (productItem.productId === productId) return productItem;
  });

  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let deliveryProgress = (timePassedMs / totalDeliveryTimeMs) * 100;

  if (deliveryProgress > 100) deliveryProgress = 100;

  let status = 'preparing';
  if (deliveryProgress >= 33 && deliveryProgress < 100) status = 'shipped';
  else if (deliveryProgress >= 100) status = 'delivered';

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryProgress >= 100 ? `Delivered` : `Arriving`} on{" "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${(status==='preparing')&&'current-status'}`}>Preparing</div>
            <div className={`progress-label ${(status==='shipped')&&'current-status'}`}>Shipped</div>
            <div className={`progress-label ${(status==='delivered')&&'current-status'}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
