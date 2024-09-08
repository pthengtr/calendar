import styled from "styled-components";
import { DateContext } from "./DateContextProvider";
import React from "react";
import { TodoContext } from "./TodoListProvider";

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;
const ItemWrapper = styled.div`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  gap: 1ch;
  font-size: 1rem;

  input:checked {
    accent-color: hsl(0deg 0% 40%);
  }

  input:checked + label {
    text-decoration: line-through;
  }

  svg {
    height: 1.2rem;
  }

  button {
    line-height: 0;
    border: none;
    background: none;
  }
`;

function TodoList() {
  const { currentDate, currentMonth, currentYear } =
    React.useContext(DateContext);
  const dateId = `${currentDate}${currentMonth}${currentYear}`;

  const { todoList, handleRemoveTodo } = React.useContext(TodoContext);

  const todoItem = todoList?.find((item) => item.date === dateId);

  return (
    <ItemListWrapper>
      {todoItem?.todo.map((item, i) => (
        <ItemWrapper key={i}>
          <input type="checkbox" id={item.id} name={item.id} />
          <label htmlFor={item.id}>{item.value}</label>
          <button onClick={() => handleRemoveTodo(todoItem.date, item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </ItemWrapper>
      ))}
    </ItemListWrapper>
  );
}

export default TodoList;
