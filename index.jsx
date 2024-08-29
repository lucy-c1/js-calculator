import React from 'react';
import ReactDOM from 'react-dom/client';
import Digit from './components/Digit';
import Operation from './components/Operation';
import Clear from './components/Clear';
import Submit from './components/Submit';
import Display from './components/Display';

function App() {
  return (
    <div className = "container input-container">
      <Display />
      <div className = "row g-0">
        <Clear />
        <Operation 
        operation = "/"
        operationId = "divide"
        colSpace = "col-3"
        />
        <Operation 
        operation = "x"
        operationId = "multiply"
        colSpace = "col-3"
        />
      </div>

      <div className = "row g-0">
        <Digit 
        digitNum = "7"
        digitId = "seven"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "8"
        digitId = "eight"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "9"
        digitId = "nine"
        colSpace = "col-3"
        />
        <Operation 
        operation = "-"
        operationId = "subtract"
        colSpace = "col-3"
        />
      </div>

      <div className = "row g-0">
        <Digit 
        digitNum = "4"
        digitId = "four"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "5"
        digitId = "five"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "6"
        digitId = "six"
        colSpace = "col-3"
        />
        <Operation 
        operation = "+"
        operationId = "add"
        colSpace = "col-3"
        />
      </div>
      <div className = "row g-0">
        <Digit 
        digitNum = "1"
        digitId = "one"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "2"
        digitId = "two"
        colSpace = "col-3"
        />
        <Digit 
        digitNum = "3"
        digitId = "three"
        colSpace = "col-3"
        />
      </div>
      
      <div className = "row g-0">
        <Digit 
        digitNum = "0"
        digitId = "zero"
        colSpace = "col-6"
        />
        <Digit 
        digitNum = "."
        digitId = "decimal"
        colSpace = "col-3"
        />
        <Submit />
      </div>
      <p id = "credit">by <a href="https://github.com/lucy-c1/js-calculator" target = "_blank">lucy-c1</a></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 