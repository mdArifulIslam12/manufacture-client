import React from "react";
import toast from "react-hot-toast";
import {useForm} from 'react-hook-form'

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = "https://manufacturer-server.onrender.com/parts";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Add Your Product Parts");
        event.target.reset();
      });
  };
  return (
    <div className="mt-16 mb-24">
      <h2 className="text-xl font-bold text-center mt-16 mb-36">Add Product</h2>
      <div className="flex h-screen justify-center items-center mb-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Product Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered w-full max-w-xs"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.img?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.img.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Minimum Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Minimum Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimum", {
                    required: {
                      value: true,
                      message: "Minimum Quantity is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.minimum?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.minimum.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("available", {
                    required: {
                      value: true,
                      message: "Available Quantity is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.available?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.available.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Detail</span>
                </label>
                <textarea
                  placeholder="Your Detail"
                  className="input-bordered w-full textarea"
                  {...register("detail", {
                    required: {
                      value: true,
                      message: "Detail is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.detail?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.detail.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn w-50 max-w-xs text-white"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
