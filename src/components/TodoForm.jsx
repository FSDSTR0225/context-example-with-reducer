import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export function TodoForm() {
    const [text, setText] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="todo-input"
            />
            <button type="submit" className="todo-button">Add</button>
        </form>
    );
} 