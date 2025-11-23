import React, { useState, useRef, useEffect } from 'react';
import styles from './TodoEdit.module.css';
import { FaCheck, FaXmark } from 'react-icons/fa6';

export default function TodoEdit({ todo, editMode, setEditMode, onEdit }) {
  const editRef = useRef(null);
  const [editText, setEditText] = useState(todo.text);

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const handleEditSave = () => {
    onEdit({ ...todo, text: editText });
    setEditMode((mode) => !mode);
  };
  const handleEditCancel = () => {
    setEditMode((mode) => !mode);
  };

  useEffect(() => {
    if (editMode && editRef.current) {
      editRef.current.focus();
    }
  }, [editMode]);

  return (
    <div className={styles.editWrapper}>
      <input
        className={styles.input}
        ref={editRef}
        type='text'
        value={editText}
        onChange={handleEditText}
      />

      <button className={styles.saveBtn} onClick={handleEditSave}>
        <FaCheck />
      </button>
      <button className={styles.cancelBtn} onClick={handleEditCancel}>
        <FaXmark />
      </button>
    </div>
  );
}
