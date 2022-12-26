import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { toast } from "react-hot-toast";
import useSelectorContext from "../Hooks/useSelectorContext";

const SectorsData = ({ item }) => {
  const {refetch} = useSelectorContext();
  const { register, handleSubmit } = useForm();

  const submit = (userData) => {
    console.log(userData);
    axios.post(`http://localhost:4000/users`,userData)
    .then(data=>{
        // console.log(data);
        if(data.status === 200){
            toast.success('Data Saved Successful')
            refetch()
        }
    })
    .catch(e=>console.error('data post error: ', e));
  };

  //   console.log(item.all);
  return (
    <div className="flex justify-center items-center mt-10 ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-col gap-3 max-w-3xl justify-between bg-teal-300  text-left"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs rounded-lg">
          <label className="mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-md"
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
            {item?.all?.map((items, i) => (
              <>
                {items.item ? (
                  <>
                    <optgroup label={items.submenu}>
                      <ItemData item={items.item}></ItemData>
                    </optgroup>
                  </>
                ) : (
                  <>
                  {items.menu ? <optgroup label={items.menu}></optgroup>:
                  <option value={items.submenu}>{items.submenu}</option>}
                  </>
                )}
              </>
            ))}
            {/* <option value={item?.brand}>{item?.brand}</option> */}
          </select>
        </div>
        <button
          type="submit"
          value="submit"
          className="btn"
        >
          submit
        </button>
      </form>
    </div>
  );
};

const ItemData = ({ item }) => {
  // console.log(item);
  return (
    <>
      {item.map((item,i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </>
  );
};
export default SectorsData;
