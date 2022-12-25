import React from "react";
import { useForm } from "react-hook-form";

const SectorsData = ({ item }) => {
  const { register, handleSubmit } = useForm();

  const submit = (e) => {
    console.log(e);
  };

  //   console.log(item.all);
  return (
    <div className="flex justify-center items-center min-h-screen ">
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
          className="uppercase bg-indigo-500 h-10 w-16 p-1 rounded-lg text-white shadow-lg hover:bg-indigo-700 cursor-pointer"
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