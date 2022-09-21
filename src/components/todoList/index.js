import React from 'react';
import './style.css'

const Todo=({todo})=>{
    console.log(todo)
    return (
        <div>
            <input className="ckeck" type="checkbox"/>
            <span>{todo.title}</span>
            <hr/>
        </div>
    )
}

export default Todo