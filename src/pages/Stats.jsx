import { useEffect } from "react";
import { useTodo } from "../context/TodoContext";


export function Stats() {
    const { todos, catFact, fetchCatFact } = useTodo();

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const activeTodos = totalTodos - completedTodos;

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div className="page">
            <h1>Todo Statistics</h1>
            <div className="stats">
                <div className="stat-item">
                    <h3>Total Todos</h3>
                    <p>{totalTodos}</p>
                </div>
                <div className="stat-item">
                    <h3>Completed</h3>
                    <p>{completedTodos}</p>
                </div>
                <div className="stat-item">
                    <h3>Active</h3>
                    <p>{activeTodos}</p>
                </div>
                <div className="stat-item">
                    <h3>Cat Fact</h3>
                    <p>{catFact}</p>
                </div>
            </div>
        </div>
    );
} 