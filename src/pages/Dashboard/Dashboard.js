import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                   
                    { admin ? <>
                    <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/mangeOrder">Manage Order</Link></li>
                        <li><Link to="/dashboard/mangeProduct">Manage Product</Link></li>
                       
                    </>:<>
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/review">Add Reviews</Link></li>
                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                    
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;