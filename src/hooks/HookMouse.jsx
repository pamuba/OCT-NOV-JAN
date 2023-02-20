import React, {useState, useEffect} from 'react'

function HookMouse(){
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Useeffect called')
        window.addEventListener('mousemove', logMousePosition)

        //componentWillUnmount
        return() => {
            console.log('componentWillUnmount called')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    return(
        <>
            Hooks: X-{x} Y-{y}
        </>
    )
}

export default HookMouse