import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Finish to make To-do list app', status: 'active' },
    {
      id: '2',
      text: 'Write README file for the to-do list app',
      status: 'active',
    },
  ]);

  const handleAdd = (newTodo) => setTodos([...todos, newTodo]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
