import styled from "styled-components";
import { DateContext } from "./DateContextProvider";
import React from "react";
import { TodoContext } from "./TodoListProvider";

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const DateWrapper = styled.button`
  height: 3rem;
  border: var(--border-size) solid black;
  display: grid;
  place-content: center;
  color: var(--text-color);
  background-color: var(--background-color);
`;

const DayWrapper = styled.div`
  display: grid;
  place-content: center;
  font-size: 0.8rem;
  padding: 8px;
`;

function CalendarDate() {
  const {
    displayYear: year,
    displayMonth: month,
    currentDate,
    currentMonth,
    currentYear,
    handleSelectDate,
  } = React.useContext(DateContext);

  const { todoList } = React.useContext(TodoContext);

  const date = new Date(year, month, 1);
  date.setDate(date.getDate() - date.getDay());

  const dateArray = [];

  Array.from(Array(42).keys()).forEach(() => {
    let currentDate = {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    dateArray.push(currentDate);
    date.setDate(currentDate.date + 1);
  });

  function isDateHasTodo(date) {
    const dateId = `${date.date}${date.month}${date.year}`;

    return todoList?.find(
      (todoItem) => todoItem.date === dateId && todoItem.todo.length > 0
    )
      ? true
      : false;
  }

  function isCurrentDate(date) {
    const dateId = `${date.date}${date.month}${date.year}`;
    const curDate = `${currentDate}${currentMonth}${currentYear}`;

    return dateId === curDate;
  }

  return (
    <>
      {DAY.map((day, i) => (
        <DayWrapper key={i}>{day}</DayWrapper>
      ))}
      {dateArray.map((date, i) => (
        <DateWrapper
          key={i}
          onClick={() => handleSelectDate(date)}
          //   style={date.month === month ? STYLE.current : STYLE.other}
          style={{
            "--text-color": date.month === month ? "black" : "gray",
            "--border-size": isDateHasTodo(date) ? "2px" : "1px",
            "--background-color": isCurrentDate(date)
              ? "hsl(0deg 0% 60%)"
              : "none",
          }}
        >
          {date.date}
        </DateWrapper>
      ))}
    </>
  );
}

export default CalendarDate;
