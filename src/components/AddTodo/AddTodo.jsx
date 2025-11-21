import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoPawSharp } from 'react-icons/io5';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      setText('');
      return;
    }

    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='textInput'
        id='textInput'
        placeholder='Add Task'
        value={text}
        onChange={handleChange}
      />
      <button type='submit'>
        <IoPawSharp />
      </button>
    </form>
  );
}
