import React from "react";
import toast from 'react-hot-toast';

const MakeAdminRow = ({ user, refetch, index}) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://still-fjord-45302.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`Successfully made an admin`);
      });
  };
  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
