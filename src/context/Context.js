import { createContext, useReducer } from "react";

export const MyContext = createContext();
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case true:
      return { bgColor: "#07090B", textColor: "#FFFFFF", mode: true };
    case false:
      return { bgColor: "#FFFFFF", textColor: "#07090B", mode: false };
    default:
      throw new Error();
  }
};

export const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    bgColor: "#FFFFFF",
    textColor: "#07090B",
    mode: false,
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
