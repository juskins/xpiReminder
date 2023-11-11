import { createContext, useReducer, useContext, useEffect } from "react";
import DarkModeReducer from "./darkModeReducer";
import axios from "axios";
import { baseUrl } from "./constants";

export const DarkModeContext = createContext();
export const useDarkModeContext = () => useContext(DarkModeContext);
export const DarkModeContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    darkMode: false,
    allProducts: [],
    productsLoading: false,
    productsError: { val: false, msg: "" },
  };
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  const getAllProducts = async () => {
    dispatch({ type: "FETCH_PRODUCTS_START" });
    // console.log("he");
    try {
      const { data } = await axios.get(
        `${baseUrl}/get_products/T8BIkch6mQdQxh4rH34F9soGCrH2`
      );
      // console.log(data);
      if (data.products) {
        console.log("hello");
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data.products });
      } else {
        throw new Error("No products found");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error.message });
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <DarkModeContext.Provider value={{ ...state, getAllProducts }}>
      {children}
    </DarkModeContext.Provider>
  );
};
