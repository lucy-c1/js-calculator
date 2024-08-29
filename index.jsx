import React from 'react';
import ReactDOM from 'react-dom/client';
import Digit from './components/Digit';
import Operation from './components/Operation';
import Clear from './components/Clear';
import Submit from './components/Submit';
import Display from './components/Display';

function App() {
  /* displayed in resultScreen */
  const [resultText, setResultText] = React.useState("0");

  /* displayed in equationScreen */
  const [equationText, setEquationText] = React.useState("");

  /* array of inputs for the equation, includes both numbers and operation 
  as elements. Perhaps use indexOf operation to check for order of operations */
  const [inputsArr, setInputsArr] = React.useState([]);

  React.useEffect(() => {
    console.log(inputsArr);
  }, [inputsArr])

  React.useEffect(() => {
    console.log(resultText);
  }, [resultText])

  function updateText(event, isOperation) {
    /* if it is an operation, that means the current resultText is one 
    of the 2 numbers, clear resultScreen, if not, the user can keep typing digits */
    const newInput = event.target.value;
    if (isOperation) {
      // inputArr
      setInputsArr(function (prevInputsArr) {
        console.log("setting inputsArr");
        return [...prevInputsArr, resultText, newInput]; // save number to array as well as operation
      })

      // result text
      setResultText(newInput); // only the operation shows
    } else {
      // result text
      if (resultText === "/" || resultText === "x" || resultText === "-" || resultText === "+" || resultText === "0") {
        setResultText("");
      }
      setResultText(function (prevResultText) {
        return prevResultText + newInput;
      })
    }

    // equation text - does not clear until the user presses the clear button or after the user types after an equal
    setEquationText(function (prevEquationText) {
      return prevEquationText + newInput;
    });
  }

  return (
    <div className = "container input-container">
      <Display 
      resultText = {resultText}
      equationText = {equationText}
      />
      <div className = "row g-0">
        <Clear />
        <Operation 
        operation = "/"
        operationId = "divide"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Operation 
        operation = "x"
        operationId = "multiply"
        colSpace = "col-3"
        updateText = {updateText}
        />
      </div>

      <div className = "row g-0">
        <Digit 
        digitNum = "7"
        digitId = "seven"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "8"
        digitId = "eight"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "9"
        digitId = "nine"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Operation 
        operation = "-"
        operationId = "subtract"
        colSpace = "col-3"
        updateText = {updateText}
        />
      </div>

      <div className = "row g-0">
        <Digit 
        digitNum = "4"
        digitId = "four"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "5"
        digitId = "five"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "6"
        digitId = "six"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Operation 
        operation = "+"
        operationId = "add"
        colSpace = "col-3"
        updateText = {updateText}
        />
      </div>
      <div className = "row g-0">
        <Digit 
        digitNum = "1"
        digitId = "one"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "2"
        digitId = "two"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "3"
        digitId = "three"
        colSpace = "col-3"
        updateText = {updateText}
        />
      </div>
      
      <div className = "row g-0">
        <Digit 
        digitNum = "0"
        digitId = "zero"
        colSpace = "col-6"
        updateText = {updateText}
        />
        <Digit 
        digitNum = "."
        digitId = "decimal"
        colSpace = "col-3"
        updateText = {updateText}
        />
        <Submit />
      </div>
      <p id = "credit">by <a href="https://github.com/lucy-c1/js-calculator" target = "_blank">lucy-c1</a></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 