import "../css/App.css";
import { useEffect, useState } from "react";
import Display from "../components/Display.jsx";
import Header from "../components/Header";
import ButtonsContainer from "../components/ButtonsContainer.jsx";

function App() {
  const [theme, setTheme] = useState(1);
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("theme-1", "theme-2", "theme-3");
    html.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleClick = (value, className) => {
    if (className === "number") {
      handleNumberClick(value);
    } else if (className === "operator") {
      handleOperatorClick(value);
    } else if (className.includes("function")) {
      handleFunctionClick(value);
    } else if (className.includes("equal")) {
      handleEqualClick();
    }
  }

  const handleNumberClick = (value) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else if (value === "." && display.includes(".")) {
      return;
    } else {
      setDisplay(display + value);
    }
  };

  const handleOperatorClick = (value) => {
    setOperator(value);
    setPreviousValue(display);
    setDisplay("0");
  };

  const handleEqualClick = () => {
    if (operator && previousValue !== null) {
      const current = parseFloat(display);
      const previous = parseFloat(previousValue);
      let result;

      switch (operator) {
        case "+":
          result = previous + current;
          break;
        case "-":
          result = previous - current;
          break;
        case "*":
          result = previous * current;
          break;
        case "/":
          result = current !== 0 ? previous / current : "Error";
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setPreviousValue(null);
      setOperator(null);
    } 
  };

  const handleFunctionClick = (value) => {
    if (value === "DEL") {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "RESET") {
      setDisplay("0");
      setPreviousValue(null);
      setOperator(null);
    }
  };

  return (
    <div className="calculator-container">
      <Header changeTheme={changeTheme} />
      <Display value={display} />
      <ButtonsContainer handleClick={handleClick} />
    </div>
  )
}

export default App
