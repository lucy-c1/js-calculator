import React from 'react';
import ReactDOM from 'react-dom/client';
import Digit from './components/Digit';
import Operation from './components/Operation';
import Clear from './components/Clear';
import Submit from './components/Submit';
import Display from './components/Display';

function App() {
  return (
    <div>
      <Clear />
      <Operation 
      operation = "/"
      operationId = "divide"
      />
      <Operation 
      operation = "X"
      operationId = "multiply"
      />
      <Digit 
      digitNum = "7"
      digitId = "seven"
      />
      <Digit 
      digitNum = "8"
      digitId = "eight"
      />
      <Digit 
      digitNum = "9"
      digitId = "nine"
      />
      <Operation 
      operation = "-"
      operationId = "subtract"
      />
      <Digit 
      digitNum = "4"
      digitId = "four"
      />
      <Digit 
      digitNum = "5"
      digitId = "five"
      />
      <Digit 
      digitNum = "6"
      digitId = "six"
      />
      <Operation 
      operation = "+"
      operationId = "add"
      />
      <Digit 
      digitNum = "1"
      digitId = "one"
      />
      <Digit 
      digitNum = "2"
      digitId = "two"
      />
      <Digit 
      digitNum = "3"
      digitId = "three"
      />
      <Digit 
      digitNum = "0"
      digitId = "zero"
      />
      <Digit 
      digitNum = "."
      digitId = "decimal"
      />
      <Submit />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 