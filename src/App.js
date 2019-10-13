import React, { useEffect, useState } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const styleButtons = "counter__button";

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
          <Button onClick={() => updateCounter(1)} value={step} style={styleButtons}/>
          <button className="counter__button counter__button--minus" onClick={() => updateCounter(2)}>-{step}</button>
        </div>
        <label className="counter__label">Step:</label>
        <input className="counter__input" type="number" onChange={fixStep} value={step}/>
      </div>
    </div>
  );
}

export default App;
