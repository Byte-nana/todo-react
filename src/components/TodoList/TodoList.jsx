import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const filteredTodos = getFilteredItem(todos, filter);
  const handleAdd = (newTodo) => setTodos([...todos, newTodo]);
  const handleUpdate = (updatedTodo) =>
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  const handleDelete = (deletedTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  };
  const handleEdit = (editedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <section className={styles.container}>
      <ul className={styles.lists}>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodos() {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
}

function getFilteredItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  } else {
    return todos.filter((todo) => todo.status === filter);
  }
}
