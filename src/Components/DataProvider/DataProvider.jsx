// import React,{createContext, useReducer} from 'react'
// // import {useReducer}from 'react'
// export const DataContext = createContext()


// export const DataProvider = ({ children, reducer, initialState }) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </DataContext.Provider>
//   );
// };
import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({children,reducer,initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Destructure state and dispatch from useReducer

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {/* // <DataContext.Provider value={useReducer(reducer, initialState)}> */}
      {/* console.log("State in DataProvider:", state); console.log("Dispatch in
      DataProvider:", dispatch); */}
      {children}
    </DataContext.Provider>
  );
};

