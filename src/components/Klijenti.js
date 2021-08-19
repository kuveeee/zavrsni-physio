import React from 'react';
// import '../styles/Klijenti.css';
import { Fragment } from 'react';

function Klijenti() {
  return (
    <Fragment>
      <div class="flex_row">
        <div class="flex_column">
          <div class="klijenti_body">
            <h1>Klijenti</h1>
            <div class="flex_row">
              <div class="tablica">
                <li>IME I PREZIME</li>
                <li>KONTAKT BROJ</li>
                <li>E-POŠTA</li>
                <li>DATUM ROĐENJA</li>
                <li>SPOL</li>
              </div>

              <div class="klijent"></div>
              <div class="klijent"></div>
              <div class="klijent"></div>
              <div class="klijent"></div>
              <div class="klijent"></div>
              <div class="klijent"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Klijenti;
