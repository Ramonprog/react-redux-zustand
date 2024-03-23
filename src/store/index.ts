import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["estudar redux", "estudar zustand"],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { addTodo } = todoSlice.actions;

// para tirar
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
