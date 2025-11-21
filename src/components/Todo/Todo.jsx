import React, { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import TodoEdit from '../TodoEdit/TodoEdit';

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
  const { id, text, status } = todo;
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleClick = () => {
    onDelete(todo);
  };

  const handleEditMode = () => {
    setEditMode((mode) => !mode);
  };

  return (
    <li>
      <input
        type='checkbox'
        name='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        {!editMode && text}
        {editMode && (
          <TodoEdit
            todo={todo}
            editMode={editMode}
            setEditMode={setEditMode}
            onEdit={onEdit}
          />
        )}
      </label>
      {!editMode && (
        <>
          <button onClick={handleEditMode}>
            <HiPencilAlt />
          </button>
          <button onClick={handleClick}>
            <HiTrash />
          </button>
        </>
      )}
    </li>
  );
}
