import React, {useState} from 'react';
import Todo from '../../components/todoList';
import Modal from '../../components/addTodo/Modal';

const todoList = [
    {id:1, title:"Start making a presentation"},
    {id:1, title:"Pay for rent"},
    {id:1, title:"Buy a milk"},
    {id:1, title:"Don't forget to pickup Mickel from school"},
    {id:1, title:"Buy a chocolate for Charlotte"}
]
const TodoContainer = () =>{
    const [todos,setTodos] = useState(todoList)
    const handleAddTodo = (newTodo)=>{
        const newTodoList=[...todos,newTodo]
        setTodos(newTodoList)
    }
    return (
        <div>
            {todos.map((todo)=><Todo todo ={todo}/>)}
            
            <Modal addTodo = {handleAddTodo}/>
        </div>
    )
}

export default TodoContainer