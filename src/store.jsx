import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/Job/jobSlice";
import allJobSlice from "./features/AllJobs/allJobSlice";


export const store = configureStore({
    reducer:{
        user:userSlice,
        job:jobSlice,
        allJobs:allJobSlice,
    },
})