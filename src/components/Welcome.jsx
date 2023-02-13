import React from 'react'

function Welcome() {
//   return (
//     <div>
//         <h1>Welcome</h1>
//     </div>
//   )

    return React.createElement('div',null, 
    React.createElement('h1', null,'Hello World')
    )
}

export default Welcome