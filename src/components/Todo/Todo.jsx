import React from 'react';
import { PiPencilSlashDuotone } from 'react-icons/pi';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

export default function Todo({ todo, onUpdate }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
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
      <label htmlFor={id}>{text}</label>
      <button>
        <HiPencilAlt />
      </button>
      <button>
        <HiTrash />
      </button>
    </li>
  );
}
