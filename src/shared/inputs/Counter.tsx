import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
                <button
                    className=""
                    onClick={decrement}
                >
                    -
                </button>
                <span className="text-sm font-semibold">{count}</span>
                <button
                    className=""
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
