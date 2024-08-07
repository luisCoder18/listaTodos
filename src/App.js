import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import './App.css';

function App() {
  return (
    <div className="App">

     <TodoCounter/>
     <TodoSearch/>
     
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton/>
    </div>
  );
}




function TodoList() {
  return (
    <h1>
        Has completado 3 de 5 TODOS
    </h1>
  );
}
function CreateTodoButton() {
  return (
    <h1>
        Has completado 3 de 5 TODOS
    </h1>
  );
}


function TodoItem() {      //componente
  return (
    //elemento jsx lo pasan por babel y lo convierte a js
    <li>
      <span>V</span>
      <p>Lorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
