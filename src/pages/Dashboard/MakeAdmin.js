import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacturer-server.onrender.com/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        
            <h2 className="text-2xl text-center mt-12 mb-12">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <tbody>
                       {
                           users.map((user,index)=><MakeAdminRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           index={index}
                           ></MakeAdminRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;