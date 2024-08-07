import React from 'react';

function TodoCounter({ completed, total }) {
  return (
    <h2 className="text-xl font-semibold mb-4">
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
