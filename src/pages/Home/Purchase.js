import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import toast from 'react-hot-toast';

const Purchase = () => {
  const navigate = useNavigate()
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [singleItem,setSingleItem] = useState({})
    const [totalQuantitys,setTotalQuantitys] = useState(0)
    useEffect(() => {
        fetch(`https://manufacturer-server.onrender.com/parts/${id}`)
          .then((res) => res.json())
          .then((data) => {
              setSingleItem(data)
            setTotalQuantitys(data.minimum)
            });
      }, []);
      const handleDecrease = async () => {
        const minimumQuantity = singleItem.minimum;
        const quantitys = totalQuantitys - 1;
        if (minimumQuantity <= quantitys) {
          setTotalQuantitys(quantitys)
        } else {
          toast.error("Product not found!!");
        }
      };
      const handleIncrease = async () => {
        const availableQuantity = singleItem.available;
        const quantitys = totalQuantitys + 1;
        if (quantitys <= 185) {
          setTotalQuantitys(quantitys)
        } else {
          toast.error("Product not Available!!");
        }
      };
      const onSubmit = data => {
        const price = singleItem.price * totalQuantitys
        const product = {
            productName:singleItem.name,
            totalQuantity:totalQuantitys,
            totalPrice:price,
            email:data.email,
            name:data.name,
            phone:data.number
        }
        const url = "https://manufacturer-server.onrender.com/order";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Add Your Order Product");
            navigate('/dashboard/myOrders')
          });
    }

    return (
        <div className='flex h-screen mt-16 mb-16 justify-center items-center'>
       <div className='mr-10'>
          <img src={singleItem.img} alt="" />
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className='font-medium text-2xl'>{singleItem.name}</h2>
                    <p className='font-medium text-xl'>Total Price: ${singleItem.price * totalQuantitys}</p>
                    <div className='flex'>
                    <button className='btn btn-sm' onClick={handleDecrease}>Decrease</button>
                    <p className='text-center text-xl font-medium'>{totalQuantitys}</p>
                    <button className='btn btn-sm' onClick={handleIncrease}>Increase</button>
                    </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })}
                            value={user.email}
                            readOnly
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                         
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })}
                            value={user.displayName}
                            readOnly
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                         
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("number")}
                        />
                    </div>
                    <input className='btn w-50 max-w-xs text-white' type="submit" value="Purchase" />
                </form>
                
            </div>
        </div>
    </div >
    );
};

export default Purchase;