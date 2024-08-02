import React, { useState } from 'react';

const InputForm = ({ onSubmit, isLoading }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    };

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON input (e.g., {"data": ["A","1","B","2"]})'
                className="input-textarea"
            />
            <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Process Data'}
            </button>
        </form>
    );
};

export default InputForm;