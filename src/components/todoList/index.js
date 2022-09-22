import React from 'react';


const Todo=({todo})=>{
    console.log(todo)
    return (
        <div className="box">
            <input className="check" type="checkbox"/>
            <span>{todo.title}</span>
            <hr/>
        </div>
    )
}

export default Todo