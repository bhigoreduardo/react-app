import { useContext } from "react";

import { fetchUser, fetchCartItems } from "../utils/fetchLocalStorage";
import { StateContext } from "./StateProvider";

export const initialState = {
  user: fetchUser(),
  foodItems: null,
  showCart: false,
  cartItems: fetchCartItems(),
};

export const useStateValue = () => useContext(StateContext);
