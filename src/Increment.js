import { useState } from "react";
import React from 'react';
import './Increment.css'
import FetchData from "./FetchData";

function Increment() {
    const[count, setCount] = useState(0);

   const onClickPlus = () => {
    setCount(count+ 1);
   }
   
   const onClickMinus = () => {
    setCount(count - 1);
   }


    return(
        
    <div className="increment">
        <h1>Hisoblagich</h1>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">Minus - </button>
        <button onClick={onClickPlus} className="plus">+ Plus </button>


        <FetchData></FetchData>
    </div>

    );

}

export default Increment;





