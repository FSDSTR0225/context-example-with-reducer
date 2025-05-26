import { useState, useCallback, useEffect } from 'react';
import './HooksDemo.css';

const UseCallbackDemo = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const [number, setNumber] = useState(1);

    // With useCallback, the function is only recreated when number changes
    const getItems = useCallback(() => {
        console.log('getItems function called');
        console.log('items dentro del useCallback', items);
        return [number + text, number + text, number + text];
    }, [number, text]);

    // This effect will now only run when getItems changes
    useEffect(() => {
        console.log('Component rendered');
        console.log('items dentro del useEffect', items);
        console.log('getItems returns : ', getItems());
        setItems(getItems());
    }, [getItems]);

    console.log('items fuera del useEffect', items);

    return (
        <div className="demo-section">
            <h3>useCallback Example (Fixed Version)</h3>
            <p>Now the component only re-renders when the number changes!</p>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                    placeholder="Enter a number"
                />
            </div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add items..."
                />
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseCallbackDemo; 