import { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6'
const Todo = ({ todo, removeTodo, completeTodo }) => {
    const [check, setCheck] = useState(false);

    const toggleCheck = () => {
        if (check == false) {
            setCheck(true);
        }
        else {
            setCheck(false);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "", width: check === true ? '85%' : '100%' }} onClick={() => toggleCheck()}>
                <div className='content'>
                    <p>{todo.text}</p>
                    <p className='category'>({todo.category})</p>
                </div>
            </div>
            <div className='todo-options' style={{ display: check === true ? 'flex' : 'none' }}>
                <button className='ready' onClick={() => completeTodo(todo.id)}><FaCheck /></button>
                <button className='remove' onClick={() => removeTodo(todo.id)}><FaX /></button>
            </div>
        </div>
    );
}

export default Todo;