import React from "react";
import { useForm } from "react-hook-form";
import useSelectorContext from "../Hooks/useSelectorContext";

const EditModal = ({ display, setDisplay,userInfo }) => {
  const { register, handleSubmit } = useForm();
  const { state, refetch } = useSelectorContext();
  const selector = state.selector[0];
  const user = state.user;
  console.log(userInfo);

  const handleCancel = () =>{
    setDisplay(false);
    userInfo="";
    refetch();
  }

  const handleOk = (data) => {
    console.log(data, "clicked");
    
  };

  return (
    <div>
      {display && (
        <div>
          <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-teal-100 bg-opacity-50">
            <div className="bg-white rounded shadow-lg w-1/3">
              <div className="flex flex-col w-full max-w-xs rounded-lg">
                <label className="mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md"
                defaultValue={userInfo?.name}
                  required
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2 font-semibold" htmlFor="sector">
                  Sectors
                </label>
                <select
                  name="sector"
                  id="sector"
                  className="rounded-md border"
                  required
                  {...register("sector")}
                >
                  {selector?.all?.map((items, i) => (
                    <>
                      {items.item ? (
                        <>
                          <optgroup label={items.submenu}>
                            <ItemData item={items.item}></ItemData>
                          </optgroup>
                        </>
                      ) : (
                        <>
                          {items.menu ? (
                            <optgroup label={items.menu}></optgroup>
                          ) : (
                            <option value={items.submenu}>
                              {items.submenu}
                            </option>
                          )}
                        </>
                      )}
                    </>
                  ))}
                  {/* <option value={item?.brand}>{item?.brand}</option> */}
                </select>
              </div>
              <div className="border-b px-4 py-2">
                <h3>modal title</h3>
              </div>
              <div className="p-3">
                <p>ilavu</p>
              </div>
              <div className="flex justify-end items-center w-100 border-t p-3">
                <button onClick={() => handleOk()} className="btn">
                  ok
                </button>
                <button onClick={() =>handleCancel()} className="btn">
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ItemData = ({ item }) => {
  // console.log(item);
  return (
    <>
      {item.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </>
  );
};

export default EditModal;
