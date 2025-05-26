import { useState, useMemo } from 'react';
import './HooksDemo.css';

const UseMemoDemo = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const slowFunction = (num) => {
        console.log('Calling slow function');
        for (let i = 0; i < 5000000000; i++) {
            // Simulating expensive calculation
        }
        return num * 2;
    };

    const doubleNumber = useMemo(() => slowFunction(number), [number]);

    // const themeStyles = useMemo(() => {
    //     return {
    //         backgroundColor: dark ? 'black' : 'white',
    //         color: dark ? 'white' : 'black',
    //     };
    // }, [dark]);
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    };

    return (
        <div className="demo-section" style={themeStyles}>
            <h3>useMemo Example</h3>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <p>Double Number: {doubleNumber}</p>
        </div>
    );
};

export default UseMemoDemo; 