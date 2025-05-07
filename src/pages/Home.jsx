import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Filter } from '../components/Filter';

export function Home() {
    return (
        <div className="page">
            <h1>Todo List</h1>
            <TodoForm />
            <Filter />
            <TodoList />
        </div>
    );
} 