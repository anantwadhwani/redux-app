import { configureStore, Tuple } from "@reduxjs/toolkit";
import reducers from "./reducer/Reducers";
import { thunk } from "redux-thunk";


const store = configureStore({
    reducer: reducers,
    preloadedState: {},
    middleware: () => new Tuple(thunk)
});

export default store;