import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../dataList";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addTask: (state, action) => {
      const { id, title, description, dueDate, status } = action.payload;

      state.push({ id, title, description, dueDate, status });
    },

    deleteTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },

    updateTaskStatus: (state, action) => {
        const { id, title, description, dueDate, status } = action.payload;
        const existingTaskIndex = state.findIndex((task) => task.id === id);
        if (existingTaskIndex !== -1) {
          state[existingTaskIndex] = { id, title, description, dueDate, status };
        }
      },
  },
});

export const { addTask, deleteTask, updateTaskStatus } = userSlice.actions;

export default userSlice.reducer;
