import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4DouHAOqOcaQ1cM1eOA5iZ2OYdubuw5BLarC2tD9cUA0gN7IekCl3PF3z2IsSpDcVTbNFU5uHdxJnYcgeihYXD00uHk3E0hk"
);

const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://still-fjord-45302.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mx-12 my-16">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Pay for {product.productName}</h2>
          <h2>Price: ${product.totalPrice}</h2>
          <p>Quantity: {product.totalQuantity}</p>
        </div>
      </div>
      <div className="card h-auto w-50 max-w-md shadow-2xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm  product={product}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
