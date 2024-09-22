import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
    if (!response) return null;

    return (
        <div className="response-container">
            {selectedOptions.includes('Alphabets') && (
                <div className="response-item">
                    <h3>Alphabets</h3>
                    <p>{response.alphabets.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('Numbers') && (
                <div className="response-item">
                    <h3>Numbers</h3>
                    <p>{response.numbers.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('Highest lowercase alphabet') && (
                <div className="response-item">
                    <h3>Highest lowercase alphabet</h3>
                    <p>{response.highest_lowercase_alphabet.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
