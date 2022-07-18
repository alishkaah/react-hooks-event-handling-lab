// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleEvent(){
        console.log('Entering password...')
    }
    return(
        <input onChange={handleEvent} type="password" />

    )

}
export default Keypad;