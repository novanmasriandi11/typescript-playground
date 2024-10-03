import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { Input } from "./Input";
import { Button } from "./Button";

export function TodoList() {
    const [todos, setTodos] = useState<{ task: string; completed: boolean}[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos(prevTodos => [...prevTodos, { task: newTodo, completed: false }]);
            setNewTodo('');
        }
    }

    const handleToggleTodo = (index: number) => {
        setTodos(prevTodos => prevTodos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
    };

    const handleDeleteTodo = (index: number) => {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    }

    return (
        <div className="w-3/5 mx-auto mt-5 bg-gray-800 text-white p-11 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Chores ToDo List</h1>
            <div className="mb-4">
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <TodoItem key={index} task={todo.task} completed={todo.completed} onToggle={()=> handleToggleTodo(index)} onDelete={()=>{handleDeleteTodo(index)}}/> 
                    ))
                ) : ( <p className="text-gray-500">No tasks available</p>)}
            </div>
            <hr className="border-gray-600 w-full"/>
            <p className="mt-4 text-center font-bold mb-4">Done: {todos.filter(todo => todo.completed).length}</p>
            <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add todo" />
            <Button onClick={handleAddTodo} className="text-gray-900">ADD TASK</Button>
        </div>
    )
}
