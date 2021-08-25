import React from 'react';
import './styles/Klijenti.css';
import { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;