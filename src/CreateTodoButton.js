import React from 'react';

function CreateTodoButton({ onClick }) {
  return (
    <button
      className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
      onClick={onClick}
    >
      Crear TODO
    </button>
  );
}

export default CreateTodoButton;
