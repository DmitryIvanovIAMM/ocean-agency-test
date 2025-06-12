import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { About } from './pages/About';
import LoginForm from './pages/LoginForm';
import ButtonAppBar from './components/AppBar/AppBar';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();
  console.log('App().  user: ', user);

  return (
    <div className="App">
      <ButtonAppBar isUserLoggedIn={!!user} />
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
