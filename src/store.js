import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});