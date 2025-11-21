import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <Header filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
