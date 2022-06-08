import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const url = "https://still-fjord-45302.herokuapp.com/review";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Add your Review success");
            event.target.reset();
          });
    }
    return (
        <div className='flex h-100 justify-center items-center mt-24 mb-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Reviews</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="text"
                                placeholder="rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    max: {
                                        value: 5,
                                        message: 'Must be 6 characters or longer'
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: 'Provide a valid Number'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.pattern?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Image URL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}                                
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
                                        message: 'Detail is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.detail?.type === 'required' && <span className="label-text-alt text-red-500">{errors.detail.message}</span>}                                
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddReview;