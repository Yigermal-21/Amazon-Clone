
import React, { useContext, useEffect } from "react";
import "./index.css";
import Routing from "./Routing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/Actiontype";
import { auth } from "./Utility/Firebase";

function App() {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log("Authenticated user:", authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  return <Routing />;
}

export default App;
