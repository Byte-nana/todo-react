import React, { useState } from 'react';
import styles from './Todo.module.css';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import TodoEdit from '../TodoEdit/TodoEdit';

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
  const { id, text, status } = todo;
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  const handleEditMode = () => {
    setEditMode((mode) => !mode);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        name='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {!editMode && text}
      </label>
      {editMode && (
        <TodoEdit
          todo={todo}
          editMode={editMode}
          setEditMode={setEditMode}
          onEdit={onEdit}
        />
      )}
      {!editMode && (
        <>
          <button className={styles.editBtn} onClick={handleEditMode}>
            <HiPencilAlt />
          </button>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            <HiTrash />
          </button>
        </>
      )}
    </li>
  );
}
