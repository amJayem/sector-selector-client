import React from "react";
import SectorsData from "../components/sectorsData";
import UserData from "../components/UserData";
import useSelectorContext from "../Hooks/useSelectorContext";

const Home = () => {
  const { state } = useSelectorContext();
  const selector = state.selector;
  const user_data = state.user_data;
  // console.log(user_data);
  return (
    <div>
      {selector.map((item) => (
        <SectorsData key={item} item={item} />
      ))}
      <div>
        <UserData user_data={user_data} />
      </div>
    </div>
  );
};

export default Home;
