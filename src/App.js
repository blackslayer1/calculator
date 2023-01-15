import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [lightMode, setLightMode] = useState(true);

  useEffect(()=>{
    document.body.classList.add('lightBg');
  }, [])

  const clickHandlerActions = (e) =>{
    let currentOperand = document.getElementById("current-operand")
    let previousOperand = document.getElementById("previous-operand")

    switch(e.target.id){
      case 'delete':
        previousOperand.removeChild(previousOperand.lastChild);
      break;
      case 'clearAll':
        previousOperand.innerText="";
        currentOperand.innerText="";
      break;
      case 'equal':

        try{
          currentOperand.innerText=eval(previousOperand.innerText);
          currentOperand.style.fontSize="60px";
          previousOperand.innerText=""
        } catch{
          currentOperand.innerText="Invalid Input"
          previousOperand.innerText=""
        }
    }
  }

  const clickHandler = (e) => {
    let currentOperand = document.getElementById("current-operand")
    let previousOperand = document.getElementById("previous-operand")
    currentOperand.style.fontSize="2.5rem";

    document.getElementById("previous-operand").insertAdjacentHTML("beforeend", e.target.innerHTML);
    currentOperand.innerText=eval(previousOperand.innerText);

  }

  const darkMode = (e) => {
    let content = document.getElementsByClassName('calculator-grid')[0];
    let buttons = content.getElementsByTagName('button');
    if(lightMode){
      setLightMode(false);
      e.target.classList.add("darkBtn");
      e.target.classList.remove("lightBtn");
      document.body.classList.add("darkBg");
      document.body.classList.remove("lightBg");
      [].forEach.call(buttons, function(btn) {
          btn.classList.add("darkNumbers");
          btn.classList.remove("lightNumbers");
      });
    } else {
      setLightMode(true);
      e.target.classList.add("lightBtn");
      e.target.classList.remove("darkBtn");
      document.body.classList.add("lightBg");
      document.body.classList.remove("darkBg");
      [].forEach.call(buttons, function(btn) {
        btn.classList.add("lightNumbers");
        btn.classList.remove("darkNumbers");
    });
    }
  }

  return (
    <div>
    <div class="calculator-grid">
    <div class="output">
      <div id="previous-operand"></div>
      <div id="current-operand"></div>
    </div>
    <button onClick={ clickHandlerActions } id="clearAll" class="span-two lightNumbers">AC</button>
    <button class="lightNumbers" onClick={ clickHandlerActions } id="delete">DEL</button>
    <button class="lightNumbers" onClick={ clickHandler }>/</button>
    <button class="lightNumbers" onClick={ clickHandler }>1</button>
    <button class="lightNumbers" onClick={ clickHandler }>2</button>
    <button class="lightNumbers" onClick={ clickHandler }>3</button>
    <button class="lightNumbers" onClick={ clickHandler }>*</button>
    <button class="lightNumbers" onClick={ clickHandler }>4</button>
    <button class="lightNumbers" onClick={ clickHandler }>5</button>
    <button class="lightNumbers" onClick={ clickHandler }>6</button>
    <button class="lightNumbers" onClick={ clickHandler }>+</button>
    <button class="lightNumbers" onClick={ clickHandler }>7</button>
    <button class="lightNumbers" onClick={ clickHandler }>8</button>
    <button class="lightNumbers" onClick={ clickHandler }>9</button>
    <button class="lightNumbers" onClick={ clickHandler }>-</button>
    <button class="lightNumbers" onClick={ clickHandler }>.</button>
    <button class="lightNumbers" onClick={ clickHandler }>0</button>
    <button onClick={ clickHandlerActions } id="equal" class="span-two lightNumbers">=</button>

  </div>
  <button class="lightBtn" onClick={darkMode}></button>
  </div>
  );
}

export default App;
