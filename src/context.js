import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
  let initialState = {
    artists: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios
      .get("http://localhost:7070/artist")
      .then((res) => {
        console.log(res.data);
        setState({
          artists: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
