import { configureStore } from "@reduxjs/toolkit";
import { variableSlice } from "./variableSlice";

const store = configureStore({
    reducer: {
        variables: variableSlice.reducer,
    }
});

export default store;