import React from "react";

const UserData = ({ user_data }) => {
  //   console.log(user_data);
  return (
    <div className=" h-screen  p-4">
      <h1 className="text-2xl font-semibold text-center mb-2">User Information</h1>
      <div className="">
        <table className="w-full">
          <thead className=" bg-gray-200 border-b-4 border-gray-200">
            <tr className="">
              <th className="p-3 font-semibold tracking-wider text-left">Name</th>
              <th className="p-3 font-semibold tracking-wider text-left">Sector</th>
              <th className="p-3 font-semibold tracking-wider text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-white shadow-lg shadow-teal-100">
            {user_data?.map((user, i) => (
              <tr key={i} className="hover:bg-teal-100">
                <td className="p-2 text-sm whitespace-nowrap">{user.name}</td>
                <td className="p-2 text-sm whitespace-nowrap">{user.sector}</td>
                <td className="p-2 text-sm whitespace-nowrap">
                  <button className="btn">Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
