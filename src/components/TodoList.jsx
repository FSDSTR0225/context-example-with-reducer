import { useTodo } from '../context/TodoContext';

export function TodoList() {
    const { todos, toggleTodo } = useTodo();

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    );
} 