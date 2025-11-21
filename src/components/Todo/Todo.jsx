import React, { useState } from 'react';
import { PiPencilSlashDuotone } from 'react-icons/pi';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { FaCheck, FaXmark } from 'react-icons/fa6';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const [editMode, setEditMode] = useState(true);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleClick = () => {
    onDelete(todo);
  };
  const handleEdit = () => {};
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
          <>
            <input type='text' value={text} />
            <button>
              <FaCheck />
            </button>
            <button>
              <FaXmark />
            </button>
          </>
        )}
      </label>
      {!editMode && (
        <>
          <button onClick={handleEdit}>
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
