import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

function MouseContainer(){
    const[display, setDisplay] = useState(true)
    return(
        <>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse></HookMouse>}
        </>
    )
}
export default MouseContainer