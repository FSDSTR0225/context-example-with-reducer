import { useState, useRef, useEffect } from 'react';
import './HooksDemo.css';

const UseRefDemo = () => {
    const [count, setCount] = useState(0);
    const [previousCount, setPreviousCount] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        setPreviousCount(count);
    }, [count]);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div className="demo-section">
            <h3>useRef Example</h3>
            <p>Current Count: {count}</p>
            <p>Previous Count: {previousCount}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <input ref={inputRef} type="text" placeholder="Focus me!" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default UseRefDemo; 