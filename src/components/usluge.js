import React from 'react';
import '../styles/Usluge.css';
import { Fragment } from 'react';
import Sidebar from './Sidebar';

//assets
// import logo from '../assets/logo.png';
import plus from '../assets/usluge/plus.png';
import trajanje from '../assets/usluge/trajanje.png';
import cijena from '../assets/usluge/cijena.png';

function Usluge() {
  return (
    // <div class="body_main">
    <Fragment>
      <div class="flex_row">
        <Sidebar />
        <div class="flex_column">
          <div class="body">
            <h1>Usluge</h1>
            <div class="nova_usluga">
              <img src={plus} alt="Dodavanje usluge"></img>
              <h3>Nova usluga</h3>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <p>NAZIV USLUGE</p>
                <p>TRAJANJE</p>
                <p>CIJENA</p>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje_img" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <h3>Trajanje</h3>
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <h3>Cijena</h3>
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_row">
              <div class="rectangle">
                <div class="flex_column">
                  <div class="usluga">
                    <h3>Usluga 1</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="trajanje">
                    <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                    <h3>Trajanje</h3>
                  </div>
                </div>
                <div class="flex_column">
                  <div class="cijena">
                    <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                    <h3>Cijena</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default Usluge;
