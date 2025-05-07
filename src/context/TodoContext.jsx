import { createContext, useContext, useState } from 'react';

// Initial state
const initialState = {
    todos: [],
    filter: 'all'
};

// Action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

function todoReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [state, setState] = useState(initialState);

    const [catFact, setCatFact] = useState('');

    const fetchCatFact = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFact(data.fact);
    }

    const addTodo = (text) => {
        const newState = todoReducer(state, { type: ADD_TODO, payload: text });
        setState(newState);
    };

    const toggleTodo = (id) => {
        const newState = todoReducer(state, { type: TOGGLE_TODO, payload: id });
        setState(newState);
    };

    const setFilter = (filter) => {
        const newState = todoReducer(state, { type: SET_FILTER, payload: filter });
        setState(newState);
    };

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <TodoContext.Provider value={{
            todos: filteredTodos,
            filter: state.filter,
            addTodo,
            toggleTodo,
            setFilter,
            catFact,
            fetchCatFact,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
} 