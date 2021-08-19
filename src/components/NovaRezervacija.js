import '../styles/nova_rezervacija.css';
import { Fragment } from 'react';

//importanje asseta
// import logo from '../assets/logo.png';
import sex_w from '../assets/nova_rezervacija/woman.png';

function NovaRezervacija() {
  return (
    <Fragment>
      <div class="body">
        <h1>Nova rezervacija</h1>
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
            <p>Broj telefona</p>
            <input type="number"></input>
            <p>Datum rođenja</p>
            <input type="date"></input>
            <p>E-pošta</p>
            <input type="email"></input>
          </div>
        </div>

        <div class="usluga">
          <h2>Odabir usluge</h2>
          <div class="usluga_box"></div>
        </div>

        <button>Kreiraj</button>
      </div>
    </Fragment>
  );
}

export default NovaRezervacija;