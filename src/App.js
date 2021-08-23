import React from 'react';
import './styles/Klijenti.css';
import { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <div class="flex_row">
      </div>
    </Fragment>
  );
}

export default App;