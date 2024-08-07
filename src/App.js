import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import CreateTodoForm from './CreateTodoForm';
import './index.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
    setShowForm(false);
  };

  const handleComplete = (index) => {
    const newTodos = todos.slice();
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Lista de Tareas</h1>
        <TodoCounter completed={completedCount} total={totalCount} />
        <TodoSearch onSearch={handleSearch} />
        <TodoList>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              onComplete={() => handleComplete(index)}
              onDelete={() => handleDelete(index)}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        {showForm ? (
          <CreateTodoForm onAdd={handleAddTodo} />
        ) : (
          <CreateTodoButton onClick={() => setShowForm(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
