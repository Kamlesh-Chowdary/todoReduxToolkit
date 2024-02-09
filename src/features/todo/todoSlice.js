import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  currentTodo: null,
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.currentTodo = null;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload.todo;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setCurrentTodo } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
