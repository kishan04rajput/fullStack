import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { globalReducer } from "./reducer";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, globalReducer);

// Create the store with the persisted reducer
export const store = createStore(persistedReducer);

// Create the persistor
export const persistor = persistStore(store);
