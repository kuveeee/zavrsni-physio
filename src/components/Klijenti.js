import React from 'react';
import '../styles/Klijenti.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Sidebar from '../components/Sidebar';

//assets
import plus from '../assets/usluge/plus.png';

function Klijenti() {
  return (
    <Router>
      <div class="flex_row">
        <Sidebar />
        <div class="flex_column">
          <div class="klijenti_body">
            <h1 class="h1">Klijenti</h1>
            <div class="novi_klijent">
              <img src={plus} alt="Dodavanje novog klijenta"></img>
              <h3>Novi klijent</h3>
            </div>
            <div class="flex_row">
              <div class="klijenti_tablica">
                <li>IME I PREZIME</li>
                <li>KONTAKT BROJ</li>
                <li>E-POŠTA</li>
                <li>DATUM ROĐENJA</li>
                <li>SPOL</li>
              </div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>
              <div class="klijent_box"></div>

            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Klijenti;
