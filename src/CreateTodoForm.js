import React, { useState } from 'react';

function CreateTodoForm({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea"
        className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-gray-800"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
}

export default CreateTodoForm;
