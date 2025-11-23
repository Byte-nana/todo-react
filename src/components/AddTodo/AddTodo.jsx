import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { v4 as uuidv4 } from 'uuid';
import { HiPlus } from 'react-icons/hi';

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        name='textInput'
        id='textInput'
        placeholder='Add Task'
        value={text}
        onChange={handleChange}
      />
      <span className={styles.buttonWrapper}>
        <button className={styles.button} type='submit'>
          <HiPlus />
        </button>
      </span>
    </form>
  );
}
