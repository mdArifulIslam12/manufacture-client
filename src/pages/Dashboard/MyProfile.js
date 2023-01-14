import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const MyProfile = () => {


    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const email = user.email
        fetch(`https://manufacturer-server.onrender.com/update/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Update Your user!')
        event.target.reset()
      });
    }
    return (
        <div>
            <h2 className='text-center font-2xl font-bold mt-16 mb-12'>My Profile</h2>
            <div>
                <h2 className='text-2xl'>Name: {user.displayName}</h2>
                <h4 className='text-2xl'>Email: {user.email}</h4>
            </div>
            <div className='flex h-screen mt-16 mb-16 justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">phone number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your phone number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone number is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                         
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your education"
                            className="input input-bordered w-full max-w-xs"
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Education is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                         
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your location"
                            className="input input-bordered w-full max-w-xs"
                            {...register("location")}
                        />
                    </div>
                    <input className='btn w-50 max-w-xs text-white' type="submit" value="Update" />
                </form>
                
            </div>
        </div>
    </div >
        </div>
    );
};


export default MyProfile;