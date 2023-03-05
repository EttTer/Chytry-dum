import React from 'react';
import "./Blinds.css";
import closedImg from "./blinds-closed.svg"
import openedImg from "./blinds-open.svg"
import { useState } from 'react';

const Blinds =({state})=> {
    const [blind,setBlind]=useState(state);


    return<><div className='blinds'>
        <div className='blinds__icon'>
            <img src = {blind ? openedImg : closedImg}/> 
    </div><div className='blinds__name'>
            Žaluzie
        </div><div className='blinds__controls'>
            <button className= {blind? 'button button--active' : 'button'} onClick ={()=> {setBlind (!blind) }} >Otevřeno</button>
            <button className= {!blind ? 'button button--active' : 'button'} onClick ={()=> {setBlind(!blind) }}>Zavřeno</button>
        </div></div></>
			
}

export default Blinds


