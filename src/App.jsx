import styled, { createGlobalStyle } from "styled-components";
import CalendarDate from "./CalendarDate";
import MonthYearSelector from "./MonthYearSelector";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import TodoAddform from "./TodoAddform";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html, body {
    height: 100%;
    font-family: 'Raleway', sans-serif;
  }

  button {
    font-family: inherit;
  }

  #root {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: hsl(0deg 0% 90%);
  height: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

const CalendarWrapper = styled.div`
  display: grid;
  justify-self: end;
  grid-template-columns: repeat(7, 3rem);
  gap: 4px;
`;

const ToDoWrapper = styled.div`
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <CalendarWrapper>
          <MonthYearSelector />
          <CalendarDate />
        </CalendarWrapper>
        <ToDoWrapper>
          <TodoDate />
          <TodoList />
          <TodoAddform />
        </ToDoWrapper>
      </Wrapper>
      ;
    </>
  );
}

export default App;
