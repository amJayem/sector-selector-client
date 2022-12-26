import React, { createContext, useReducer } from "react";
import {
  Fetching_Start,
  Fetching_Success,
  Fetching_UserData,
  initialState,
  selectorReducer,
} from "../reducer/Action";
import { useQuery } from "@tanstack/react-query";

export const SelectorContext = createContext();

const SelectorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  // getting sectors from db
  const { data } = useQuery({
    queryKey: ["sector"],
    queryFn: async () => {
      dispatch({ type: Fetching_Start });
      const res = await fetch(`http://localhost:4000/sectors`);
      const data = await res.json();
      dispatch({ type: Fetching_Success, payload: data });
      return data;
    },
  });

  // getting userData from db
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/user-data`);
      const data = await res.json();

      dispatch({ type: Fetching_UserData, payload: data });
      return data;
    },
  });
  // console.log(allSectors);
  // console.log(userData);
  // if (isLoading) {
  //   refetch();
  // }

  const value = { state, dispatch, refetch, userData };
  return (
    <div>
      <SelectorContext.Provider value={value}>
        {children}
      </SelectorContext.Provider>
    </div>
  );
};

export default SelectorProvider;
