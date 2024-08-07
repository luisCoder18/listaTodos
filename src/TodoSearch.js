import React, { useState } from 'react';

function TodoSearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder="Buscar TODO"
      className="w-full p-2 border border-gray-300 rounded-md mb-4"
    />
  );
}

export { TodoSearch };
