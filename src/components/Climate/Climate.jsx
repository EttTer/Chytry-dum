import React from 'react';
import "./Climate.css";
import temperImg from "./temp.svg"
import { useState } from 'react';


const Climate =({temperature, humidity})=>{
    
    
    const [climat,setClimat] = useState(temperature)

    return <div className='climate'>
    <div className='climate__icon'>

        <img src={temperImg}></img>
    
    </div>
    <div className='climate__content'>
        <div className='climate__temperature'>{climat}</div>

        <div className='climate__humidity'>Vlhost vzduchu {humidity}%</div>
    </div>
    <div className='climate__controls'>
        <button className='button' onClick={ () => setClimat(climat + 1)}>+</button>
        <button className='button' onClick={ () => setClimat (climat- 1)}>-</button>
    </div>
</div>

}

export default Climate

