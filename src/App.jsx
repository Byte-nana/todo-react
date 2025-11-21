import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState('all');

  return (
    <DarkModeProvider>
      <Header filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
