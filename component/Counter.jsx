import React from "react";
import { useState } from "react";
import GetMultiple from "./GetMultiple";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //Con funciones para condicionales
  if(counter < 0){
    setCounter(0);
  }

  return (
    <div className="Counter-cont">
      <h1>{counter}</h1>
      <div className="btns">
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <GetMultiple counter={counter} />
    </div>
  );
};

export default Counter;


{/* {counter % 5 === 0 ? (
  <div>
    <h2>Es múltiplo de cinco</h2>
  </div>
) : counter % 3 === 0 ? (
  <div>
    <h2>Es múltiplo de tres</h2>
  </div>
) : counter % 2 === 0 ? (
  <div>
    <h2>Es múltiplo de dos</h2>
  </div>
) : (
  <h2>No es múltiplo de DOS, TRES ni CINCO</h2>
)}

{/* <h2>Es un número par</h2> */}

// condicion && jsx */}