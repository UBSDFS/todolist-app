import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TodoList />
      </header>
    </div>
  );
}
export default App;