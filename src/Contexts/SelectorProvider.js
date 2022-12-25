import React, { createContext, useReducer } from "react";
import {
  Fetching_Start,
  Fetching_Success,
  initialState,
  selectorReducer,
} from "../reducer/Action";
import { useQuery } from "@tanstack/react-query";

export const SelectorContext = createContext();

const SelectorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  const {
    data: allSectors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["sector"],
    queryFn: async () => {
      dispatch({ type: Fetching_Start });
      const res = await fetch(`http://localhost:4000/sectors`);
      const data = await res.json();
      dispatch({ type: Fetching_Success, payload: data });

      return data;
    },
  });
  // console.log(allSectors);

  const value = { state, dispatch, allSectors, isLoading, error};
  return (
    <div>
      <SelectorContext.Provider value={value}>
        {children}
      </SelectorContext.Provider>
    </div>
  );
};

export default SelectorProvider;
