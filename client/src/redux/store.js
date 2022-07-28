import { configureStore } from "@reduxjs/toolkit";
import responsesReducer from "./index.js"

export const store = configureStore({
  reducer: { responses: responsesReducer },
});