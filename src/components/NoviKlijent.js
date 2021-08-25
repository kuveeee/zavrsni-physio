import React from 'react';
import '../styles/NoviKlijent.css';
import Sidebar from './components/Sidebar';

//assets
import sex_w from './assets/nova_rezervacija/woman.png';

function NoviKlijent() {
  return (
    <div>
      <div clas="flex_row">
        <div class="column">
          <Sidebar />
        </div>
        <div class="flex_column">
          <div class="body">
            <h1>Novi klijent</h1>
            <div class="break"></div>
            <div class="klijent">
              <img class="woman" src={sex_w} alt="woman"></img>
              <div class="input">
                <p>Ime</p>
                <input type="text"></input>
                <p>Prezime</p>
                <input type="text"></input>
              </div>
              <div class="input2">
                <p>Spol</p>
                <select class="ui dropdown">
                  <option value="">Spol</option>
                  <option value="1">Muškarac</option>
                  <option value="0">Žena</option>
                </select>
                <p>Broj telefona</p>
                <input type="number"></input>
                <p>Datum rođenja</p>
                <input type="date"></input>
                <p>E-pošta</p>
                <input type="email"></input>
              </div>
            </div>
            <div class="break"></div>
            <button>Dodaj</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoviKlijent
