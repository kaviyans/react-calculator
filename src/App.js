import React, { useState } from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';


 function App() {

  let [value, setValue] = useState('')

  function handle(e){
    setValue(value + e.target.innerHTML)
  }

  function equal(){
    setValue(eval(value))
  }

  function AC(){
    setValue("")
  }

  function Del(){
    if(typeof value === "string"){
      setValue(value.slice(0,-1));
    }else{
      console.log("it is not a string");
    }
  }

  return (
    <>
      <div className='calculator'>
        <h2>Calculator App</h2>
        <input type="text"
        placeholder='0'
        value={value}/>
        <div>
        <button onClick={AC}>AC</button>
        <button onClick={Del}>Del</button>
        <button onClick={handle}>%</button>
        <button onClick={handle}>/</button>
        </div>
        <div>
        <button onClick={handle}>7</button>
        <button onClick={handle}>8</button>
        <button onClick={handle}>9</button>
        <button onClick={handle}>*</button>
        </div>
        <div>
        <button onClick={handle}>4</button>
        <button onClick={handle}>5</button>
        <button onClick={handle}>6</button>
        <button onClick={handle}>-</button>
        </div>
        <div>
        <button onClick={handle}>1</button>
        <button onClick={handle}>2</button>
        <button onClick={handle}>3</button>
        <button onClick={handle}>+</button>
        </div>
        <div>
        <button onClick={handle}>00</button>
        <button onClick={handle}>0</button>
        <button onClick={handle}>.</button>
        <button id="equal" onClick={equal}>=</button>
        </div>
      </div>
    </>
  )
}
export default App;