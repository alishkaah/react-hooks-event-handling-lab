// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function blurEvent(){
        console.log('Hey! Eyes on me!')
    }
    function focusEvent(){
        console.log('Good!')
    }
    return(
        <button onFocus={focusEvent} onBlur={blurEvent}>"Eyes on me"</button>
    )
}

export default EyesOnMe