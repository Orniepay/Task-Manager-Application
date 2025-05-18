import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1>Tasklify</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;
