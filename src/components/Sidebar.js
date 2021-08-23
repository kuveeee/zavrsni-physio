import React from 'react';
import '../styles/sidebar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from '../App';
import Klijenti from './Klijenti';
import NovaRezervacija from './NovaRezervacija';
import Usluge from '../components/Usluge';

//assets
import logo from '../assets/logo.png';

function Sidebar() {
  return (
    <Router>
      <div class="sidebar">
        <img class="logo" src={logo} alt="Logo"></img>
        <div class="break"></div>
        <Link exact to="/">
          <div class="row">
            <p>NADZORNA PLOČA</p>
          </div>
        </Link>
        <div class="break"></div>
        <div class="row">
          <Link exact to="/addclient">
            <p>DODAVANJE KLIJENTA</p>
          </Link>
        </div>
        <div class="break"></div>
        <div class="row">
          <Link exact to="/usluge">
            <p>USLUGE</p>
          </Link>
        </div>
        <div class="row">
          <Link exact to="/klijenti">
            <p>KLIJENTI</p>
          </Link>
        </div>
        <div class="break"></div>
      </div>
      <Switch>
        <Route path="/" />
        <Route path="/addclient" component={NovaRezervacija} /> {/* kriv naziv rute al ok */}
        <Route path="/usluge" component={Usluge} />
        <Route path="/klijenti" component={Klijenti} />
      </Switch>
    </Router>
  );
}

export default Sidebar;
