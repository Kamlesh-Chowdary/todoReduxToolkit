import { useState, useEffect } from "react";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const currentTodo = useSelector((state) => state.currentTodo);
  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo.text);
    }
  }, [currentTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (currentTodo) {
      dispatch(updateTodo({ id: currentTodo.id, text: todo }));
    } else {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  return (
    <div className="flex flex-wrap justify-center">
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {currentTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
