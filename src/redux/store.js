import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/AdminSlice.js";
import orgReducer from "../features/organization/OrganizationSlice.js";
import systemReducer from "../features/system/systemSlice.js";

const rootReducer = combineReducers({
  adminInfo: adminReducer,
  orgInfo: orgReducer,
  systemInfo: systemReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
