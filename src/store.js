import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {score : "scoreReducer"}
})
export default store;