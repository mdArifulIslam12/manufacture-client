import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  const { productName, totalQuantity, totalPrice, _id } = order;
  const [items,setItems] = useState([])
  useEffect(()=>{
    fetch('https://manufacturer-server.onrender.com/order')
    .then(res=>res.json())
    .then(data=>setItems(data))
},[])
  const handleDelete = (id) => {
    const proceed = window.confirm("Are your sure!!");

    if (proceed) {
      const url = `https://manufacturer-server.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div>
      <div className="card lg:max-w-lg shadow-xl h-64">
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <h2 className="card-title">Price: ${totalPrice}</h2>
          <p>Quantity: {totalQuantity}</p>
          <div className="card-actions justify-start">
            {totalPrice && !order.paid && (
             <div>
                <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn btn-primary">Payment</button>
              </Link>
              <button onClick={()=>handleDelete(_id)} className='ml-3 btn btn-error'>Delete</button>
             </div>
             
            )}
            {totalPrice && order.paid && (
              <div>
                  <h2 className="font-medium">Transaction Id: {order.transactionId}</h2>
                  <p><span className="text-success text-xl">Paid</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
