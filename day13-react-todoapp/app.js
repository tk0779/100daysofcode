import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  //สร้างstate
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState(""); // เก็บค่าเริ่มต้นเป็น string เปล่า
  const [isEditing, setIsEditing] = useState(false); //เป็น boolean
  const [currentTodo, setCurrentTodo] = useState({});

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log("Current Todo", currentTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  console.log(todos);

  return (
    <div className="App">
      <h1> Todo App</h1>
      <p>Day13 of #100daysofcode tk0779</p>

      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">Edit todo: </label>
          <input
            type="text"
            name="editTodo"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit" className="btnCircle">Update</button>
          <button onClick={() => setIsEditing} className='btnCircle'>Cancel</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit" className="btnCircle">Add</button>
        </form>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          //ตรงจุดนี้คือดึงค่าจาก stateมาไว้ ให้เป็นli
          <li key={todo.id}>
            {todo.text}
            {"   "}
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}> X</button>
          </li>
        ))}
      </ul>
          <div className="bottomSide">
            <p>All tasks: <h1>
            {todos.length}
            </h1>
            </p>
          </div>
    </div>
  );
};

export default App;
