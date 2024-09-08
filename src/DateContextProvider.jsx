/* eslint-disable react/prop-types */
import React from "react";

export const DateContext = React.createContext();

function DateContextProvider({ children }) {
  const [currentMonth, setCurrentMonth] = React.useState(() =>
    new Date(Date.now()).getMonth()
  );
  const [displayMonth, setDisplayMonth] = React.useState(() =>
    new Date(Date.now()).getMonth()
  );
  const [currentYear, setCurrentYear] = React.useState(() =>
    new Date(Date.now()).getFullYear()
  );
  const [displayYear, setDisplayYear] = React.useState(() =>
    new Date(Date.now()).getFullYear()
  );
  const [currentDate, setCurrentDate] = React.useState(() =>
    new Date(Date.now()).getDate()
  );

  function handleSelectMonth(monthNumber) {
    setDisplayMonth(monthNumber);
  }

  function handleChangeYear(incDec) {
    setDisplayYear(displayYear + incDec);
  }

  function handleSelectDate(date) {
    setCurrentDate(date.date);
    setCurrentMonth(date.month);
    setCurrentYear(date.year);
  }

  const value = {
    currentMonth,
    currentYear,
    currentDate,
    displayMonth,
    displayYear,
    handleSelectMonth,
    handleChangeYear,
    handleSelectDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export default DateContextProvider;
