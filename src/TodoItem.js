import React from 'react';

function TodoItem({ text, onComplete, onDelete, completed }) {
  return (
    <li className={`flex items-center justify-between py-2 px-4 border-b border-gray-300 ${completed ? 'bg-green-100' : 'bg-white'}`}>
      <span className={`flex-1 ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{text}</span>
      <div className="flex items-center">
        <span 
          className={`cursor-pointer ml-2 ${completed ? 'text-gray-500' : 'text-green-500'}`} 
          onClick={onComplete}
        >
          ✔
        </span>
        <span 
          className="text-red-500 cursor-pointer ml-2" 
          onClick={onDelete}
        >
          ✘
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
