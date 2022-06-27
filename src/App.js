import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login'
import Navbar from './components/Navbar'
import Signup from './Auth/Signup'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(function (config) {

  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/chats' element={<Chat />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
