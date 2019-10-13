import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const updateCounter = (operation) => {
    switch (operation) {
      case 1:
        setCount(count + step);
        break;
      case 2:
        setCount(count - step);
        break;
      default:
        setCount(count);
    }
  }

  const fixStep = (e) =>{
    const value = parseInt(e.target.value, 10);
    setStep(value);
  }
  

  return (
    <div className="card">
      <div className="counter">
        <h2>Counter</h2>
        <p className="counter__output">{count}</p>
        <div className="counter__buttons">
          <button className="counter__button counter__button--plus" onClick={() => updateCounter(1)}>+{step}</button>
          <button className="counter__button counter__button--minus" onClick={() => updateCounter(2)}>-{step}</button>
        </div>
        <label className="counter__label">Step:</label>
        <input className="counter__input" type="number" onChange={fixStep} value={step}/>
      </div>
    </div>
  );
}

export default App;
