import styled from "styled-components";
import { TodoContext } from "./TodoListProvider";
import React from "react";
import { DateContext } from "./DateContextProvider";

const FormWrapper = styled.form`
  display: flex;
  gap: 1ch;

  input {
    padding: 2px;
  }
  button {
    padding: 0px 4px;
  }
`;

const Wrapper = styled.div`
  padding: 16px 8px;
`;

function TodoAddform() {
  const { inputTodo, handleTodoInput, handleAddTodo } =
    React.useContext(TodoContext);
  const { currentYear, currentMonth, currentDate } =
    React.useContext(DateContext);
  const dateId = `${currentDate}${currentMonth}${currentYear}`;

  return (
    <Wrapper>
      <FormWrapper onSubmit={(e) => handleAddTodo(e, dateId, inputTodo)}>
        <input
          type="text"
          id="newTodo"
          value={inputTodo}
          onChange={(e) => handleTodoInput(e)}
        />
        <button>Add</button>
      </FormWrapper>
    </Wrapper>
  );
}

export default TodoAddform;
