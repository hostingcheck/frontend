import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import InputForm from './components/InputForm';
import OptionSelector from './components/OptionSelector';
import ResponseDisplay from './components/ResponseDisplay';
import './styles/App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (input) => {
    setError('');
    setIsLoading(true);
    try {
      const parsedInput = JSON.parse(input);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/bfhl`, parsedInput);
      setResponse(res.data);
      setSelectedOptions(['Alphabets', 'Numbers', 'Highest alphabet']);
    } catch (err) {
      setError('Invalid JSON input or API error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(item => item !== option)
        : [...prevOptions, option]
    );
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && <p className="error-message">{error}</p>}
        {response && (
          <>
            <OptionSelector
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
            />
            <ResponseDisplay
              response={response}
              selectedOptions={selectedOptions}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;