import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header>
      <button onClick={toggleDarkMode}>
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
