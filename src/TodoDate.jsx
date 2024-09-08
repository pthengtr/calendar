import styled from "styled-components";
import React from "react";
import { DateContext } from "./DateContextProvider";

const Wrapper = styled.div`
  padding: 8px;
`;

function TodoDate() {
  const { currentDate, currentMonth, currentYear } =
    React.useContext(DateContext);

  const date = new Date(currentYear, currentMonth, currentDate);

  return (
    <Wrapper>
      <h3>{date.toDateString()}</h3>
    </Wrapper>
  );
}

export default TodoDate;
