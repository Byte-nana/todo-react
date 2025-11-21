import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

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
  const handleUpdate = (updatedTodo) =>
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
