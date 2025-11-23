import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(() => readFilter());

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

function readFilter() {
  const stored = localStorage.getItem('filter');
  return stored ? JSON.parse(stored) : filters[0];
}
export default App;
