import { useState } from 'react';
import UseRefDemo from '../components/UseRefDemo';
import UseMemoDemo from '../components/UseMemoDemo';
import UseCallbackDemo from '../components/UseCallbackDemo';
import './HooksPage.css';

const HooksPage = () => {
    const [activeDemo, setActiveDemo] = useState('useRef');

    const renderDemo = () => {
        switch (activeDemo) {
            case 'useRef':
                return <UseRefDemo />;
            case 'useMemo':
                return <UseMemoDemo />;
            case 'useCallback':
                return <UseCallbackDemo />;
            default:
                return <UseRefDemo />;
        }
    };

    return (
        <div className="hooks-page">
            <h1>React Hooks Demo</h1>
            <div className="demo-navigation">
                <button
                    className={activeDemo === 'useRef' ? 'active' : ''}
                    onClick={() => setActiveDemo('useRef')}
                >
                    useRef Demo
                </button>
                <button
                    className={activeDemo === 'useMemo' ? 'active' : ''}
                    onClick={() => setActiveDemo('useMemo')}
                >
                    useMemo Demo
                </button>
                <button
                    className={activeDemo === 'useCallback' ? 'active' : ''}
                    onClick={() => setActiveDemo('useCallback')}
                >
                    useCallback Demo
                </button>
            </div>
            <div className="demo-container">
                {renderDemo()}
            </div>
        </div>
    );
};

export default HooksPage; 