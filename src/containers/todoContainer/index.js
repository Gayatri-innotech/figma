import React from 'react';
import Todo from '../../components/todoList';

const todoList = [
    {id:1, title:"Start making a presentation"},
    {id:1, title:"Pay for rent"},
    {id:1, title:"Buy a milk"},
    {id:1, title:"Don't forget to pickup Mickel from school"},
    {id:1, title:"Buy a chocolate for Charlotte"}
]
const TodoContainer = () =>{
    return (
        <div>
            {todoList.map((todo)=><Todo todo ={todo}/>)}
            {/* <Todo/> */}
        </div>
    )
}

export default TodoContainer