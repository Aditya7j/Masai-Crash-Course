import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/home';
import { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import SingleMovie from './components/singleMovie/single-movie';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`} >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/movie/:id" element={<SingleMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
