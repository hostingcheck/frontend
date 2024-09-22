import React, { useState } from 'react';

const InputForm = ({ onSubmit, isLoading }) => {
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input, file);
    };

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON input (e.g., {"data": ["A","1","B","2"]})'
                className="input-textarea"
            />
            <input
                type="file"
                accept="*/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="file-input"
            />
            <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Process Data'}
            </button>
        </form>
    );
};

export default InputForm;
