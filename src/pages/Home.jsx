import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Filter } from '../components/Filter';


const API_URL = import.meta.env.VITE_BACKEND_URL;

export function Home() {
    return (
        <div className="page">
            <h1>Todo List</h1>
            <p>API URL: {API_URL}</p>
            <TodoForm />
            <Filter />
            <TodoList />
        </div>
    );
} 