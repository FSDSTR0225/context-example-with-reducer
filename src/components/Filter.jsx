import { useTodo } from '../context/TodoContext';

export function Filter() {
    const { filter, setFilter } = useTodo();

    return (
        <div className="filter">
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={filter === 'active' ? 'active' : ''}
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
        </div>
    );
} 