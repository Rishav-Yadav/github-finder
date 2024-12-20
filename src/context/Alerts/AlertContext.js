import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const setAlert = (message, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { message, type },
    });
    setTimeout(
      () =>
        dispatch({
          type: "CLEAR_ALERT",
          payload: null,
        }),
      2500
    );
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
