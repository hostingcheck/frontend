import React from 'react';

const OptionSelector = ({ selectedOptions, onOptionChange }) => {
    const options = ['Alphabets', 'Numbers', 'Highest alphabet'];

    return (
        <div className="option-selector">
            <h2>Select data to display:</h2>
            <div className="options-container">
                {options.map(option => (
                    <label key={option} className="option-label">
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => onOptionChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default OptionSelector;