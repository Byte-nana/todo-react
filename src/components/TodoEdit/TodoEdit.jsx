import React, { useState, useRef, useEffect } from 'react';
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
    <>
      <input
        ref={editRef}
        type='text'
        value={editText}
        onChange={handleEditText}
      />
      <button onClick={handleEditSave}>
        <FaCheck />
      </button>
      <button onClick={handleEditCancel}>
        <FaXmark />
      </button>
    </>
  );
}
