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

  function handleClear() {
    setResultText("0");
    setEquationText("");
    setInputsArr([]);
  }

  function performOperation(operation, operationIndex, arr) {
    const num1 = parseFloat(arr[operationIndex - 1]);
    const num2 = parseFloat(arr[operationIndex + 1]);
    let result = 0;
    if (operation === "x") {
      result = num1 * num2;
    } else if (operation === "/") {
      result = num1 / num2;
    } else if (operation === "+") {
      result = num1 + num2;
    } else {
      result = num1 - num2;
    }
    console.log(num1 + operation + num2 + "=" + result);
    
    // delete from arr the 2 nums and operation, add result at that location
    let resultArr = arr.slice(0, operationIndex - 1);
    resultArr.push(result);
    resultArr = resultArr.concat(arr.slice(operationIndex + 2));

    console.log(resultArr);

    return resultArr;
  }

  function handleEquals() {
    let inputsArrCopy = [...inputsArr];
    inputsArrCopy.push(resultText);

    let additionIndex = inputsArrCopy.indexOf("+");
    while (additionIndex != -1) {
      inputsArrCopy = performOperation("+", additionIndex, inputsArrCopy);
      additionIndex = inputsArrCopy.indexOf("+");
    }

    // /* a copy of array inputsArr so that there is no need to deal with states */
    // let inputsArrCopy = [...inputsArr];

    // /* push whatever that is in resultText to the inputsArrCopy */
    // inputsArrCopy.push(resultText);

    // /* calculate result based on order of operations */
    // // an operation should always have a number to the left of it and to the right of it
    // // multiply and divide until there is no more * or / in array
    // let multiplyIndex = inputsArrCopy.indexOf("x");
    // let divisionIndex = inputsArrCopy.indexOf("/");

    // while (multiplyIndex != -1 || divisionIndex != -1) {
    //   // perform division
    //   inputsArrCopy = performOperation("/", divisionIndex, inputsArrCopy);
    //   // recalculate index
    //   divisionIndex = inputsArrCopy.indexOf("/");
    // }

    // /* if the user types a number after pressing equals, push it to inputsArr
    // or make it so that it pushes by default and clear it if the user clicks on a digit in updateText
    // */

    // /* cut off .0. Ex: 2.0 turns into 2 */
  }

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
        <Clear 
        handleClear = {handleClear}
        />
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
        <Submit 
        handleEquals = {handleEquals}
        />
      </div>
      <p id = "credit">by <a href="https://github.com/lucy-c1/js-calculator" target = "_blank">lucy-c1</a></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 