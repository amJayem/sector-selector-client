import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useSelectorContext from "../Hooks/useSelectorContext";
import { Fetching_User } from "../reducer/Action";
import EditModal from "./EditModal";

const UserData = ({ user_data }) => {
  const { refetch, dispatch } = useSelectorContext();
  const [display, setDisplay] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleDelete = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:4000/delete-user/${id}`)
      .then((data) => {
        // console.log(data);
        if (data.status === 200) {
          toast.success("Delete Successful");
          refetch();
        }
      })
      .catch((e) => {
        console.error("delete error => ", e);
      });
  };

  const handleEdit = id =>{
    setUserInfo("");
    setDisplay(true);
    // console.log(id);
    axios.get(`http://localhost:4000/user/${id}`)
    .then(data=>{
        // console.log(data.data);
        setUserInfo(data.data);
        dispatch({type: Fetching_User, payload: data});
        refetch();
    })
    .catch(e=>{
        console.error('user data get error => ',e);
    })
  };

//   console.log(userInfo);

  return (
    <div className="my-20  p-4">
      <h1 className="text-2xl font-semibold text-center mb-2">
        User Information
      </h1>
      <EditModal display={display} setDisplay={setDisplay} userInfo={userInfo}/>
      <div className="">
        <table className="w-full">
          <thead className=" bg-gray-200 border-b-4 border-gray-200">
            <tr className="">
              <th className="p-3 font-semibold tracking-wider text-left"></th>
              <th className="p-3 font-semibold tracking-wider text-left">
                Name
              </th>
              <th className="p-3 font-semibold tracking-wider text-left">
                Sector
              </th>
              <th className="p-3 font-semibold tracking-wider text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300 shadow-lg shadow-teal-100">
            {user_data?.map((user, i) => (
              <tr key={i} className="hover:bg-teal-100">
                <td className="p-2 text-sm whitespace-nowrap">{i + 1}</td>
                <td className="p-2 text-sm whitespace-nowrap">{user.name}</td>
                <td className="p-2 text-sm whitespace-nowrap">{user.sector}</td>
                <td className="p-2 text-sm whitespace-nowrap">
                  <button onClick={()=>handleEdit(user._id)} className="btn">Edit</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
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
