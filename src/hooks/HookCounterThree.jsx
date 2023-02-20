import React, {useState, useEffect} from 'react'

function HookCounterThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //componentDidMount
    useEffect(()=>{
        console.log('useEffect - Updating the document title')
        document.title = `You clicked ${count} times`
    }, [count])


    return (
       <>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
       </>
    )

}

export default HookCounterThree
