import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DateContextProvider from "./DateContextProvider.jsx";
import TodoListProvider from "./TodoListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoListProvider>
      <DateContextProvider>
        <App />
      </DateContextProvider>
    </TodoListProvider>
  </StrictMode>
);
