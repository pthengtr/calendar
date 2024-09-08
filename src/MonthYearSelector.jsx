import styled from "styled-components";
import React from "react";
import { DateContext } from "./DateContextProvider";

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;

  font-size: 1.5rem;

  padding: 8px;
`;

const MonthSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;
`;

const CurrentMonthHeader = styled.span``;

const YearSelectionWrapper = styled.div`
  display: flex;
  gap: 1ch;
  button {
    font-size: inherit;
    padding: 0px 4px;
  }
  svg {
    height: 1rem;
  }
`;

const MonthButton = styled.button`
  padding: 2px;
  font-size: 0.75rem;
`;

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthYearSelector() {
  const {
    displayYear: year,
    displayMonth: month,
    handleChangeYear,
    handleSelectMonth,
  } = React.useContext(DateContext);

  return (
    <>
      <CalendarHeader>
        <CurrentMonthHeader>{MONTH[month]}</CurrentMonthHeader>
        <YearSelectionWrapper>
          <button onClick={() => handleChangeYear(-1)}>
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span>{year}</span>
          <button onClick={() => handleChangeYear(1)}>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </YearSelectionWrapper>
      </CalendarHeader>

      <MonthSelectionWrapper>
        {MONTH.map((month, i) => (
          <MonthButton onClick={() => handleSelectMonth(i)} key={i}>
            {month.slice(0, 3)}
          </MonthButton>
        ))}
      </MonthSelectionWrapper>
    </>
  );
}

export default MonthYearSelector;
