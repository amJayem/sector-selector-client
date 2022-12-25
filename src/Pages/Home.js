import React from "react";
import SectorsData from "../components/sectorsData";
import useSelectorContext from "../Hooks/useSelectorContext";

const Home = () => {
  const { state } = useSelectorContext();
  const selector = state.selector;
//   console.log(selector);
  return (
    <div>
      {selector.map((item) => (
        <SectorsData key={item} item={item} />
      ))}
    </div>
  );
};

export default Home;
