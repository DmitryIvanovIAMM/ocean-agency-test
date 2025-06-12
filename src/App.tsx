import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { About } from './pages/About';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
