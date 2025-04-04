import React from 'react'

export function ViewItems(props){
    return(
        <div className="items-container">
            <h1>Items will go here</h1>
            {props.items.map(item => <div>{item}</div>)}
        </div>
    )
}

// export function Items(props){
//     return(
//         <div>{props.object}</div>
//     )
// }