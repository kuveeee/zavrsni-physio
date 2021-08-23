import '../styles/nova_rezervacija.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//importanje asseta
// import logo from '../assets/logo.png';
import sex_w from '../assets/nova_rezervacija/woman.png';
import back from '../assets/left-arrow@2x.png';

function NovaRezervacija() {
  return (
    <Router>
      <div class="flex_row">
        <div class="column">
          <Sidebar />
        </div>
        <div class="flex_column">
          <div class="body">
            <img class="back" src={back} alt="back button"></img>
            <div class="break"></div>
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
            <div class="flex_row">
              <h2>Odabir usluge</h2>
              <div class="flex_row">
                <select class="ui dropdown">
                  <option value="">Usluge</option>
                  <option value="1">Usluga 1</option>
                  <option value="0">Usluga 2</option>
                  <option value="0">Usluga 3</option>
                  <option value="0">Usluga 4</option>
                  <option value="0">Usluga 5</option>
                </select>
              </div>
              <button>Kreiraj</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Switch>
                <Route path="/" component={} />
            </Switch> */}
    </Router>
  );
}

export default NovaRezervacija;
