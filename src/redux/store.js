import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/AdminSlice.js";

const rootReducer = combineReducers({
  adminInfo: adminReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
