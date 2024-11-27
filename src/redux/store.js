//Step1: Create store
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counter/counterSlice";

//Step4: Add slice reducer to store
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
