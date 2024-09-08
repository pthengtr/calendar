/* eslint-disable react/prop-types */
import React from "react";

export const TodoContext = React.createContext();

function TodoListProvider({ children }) {
  const [inputTodo, setInputTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );

  console.log(JSON.parse(localStorage.getItem("todoList")));

  function handleTodoInput(e) {
    setInputTodo(e.target.value);
  }

  function handleRemoveTodo(date, id) {
    const newTodoList = [...todoList];

    const newTodoItem = newTodoList.find((item) => item.date === date);

    newTodoItem.todo = newTodoItem.todo.filter((todo) => todo.id !== id);

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }

  function handleAddTodo(e, date, value) {
    e.preventDefault();

    const newTodoList = [...todoList];

    const newTodoItem = newTodoList.find((item) => item.date === date);

    if (newTodoItem) {
      newTodoItem.todo.push({ id: Math.random(), value });
    } else {
      newTodoList.push({
        date: date,
        todo: [{ id: Math.random(), value }],
      });
    }

    setInputTodo("");
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }

  const value = {
    inputTodo,
    todoList,
    handleTodoInput,
    handleAddTodo,
    handleRemoveTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoListProvider;
