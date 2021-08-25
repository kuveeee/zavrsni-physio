import React from 'react'
import '../styles/Naplaćivanje.css';
import Sidebar from '../components/Sidebar';

function Naplaćivanje() {
  return (
    <div class="flex_row">
      <Sidebar />
      <div class="flex_column">
        <div class="naplacivanje_body">
          <h1>Naplaćivanje</h1>
          <div class="flex_row">
            <div class="naplacivanje_pacijent">
              <h3>Pacijent</h3>
            </div>
          </div>
          <div class="flex_row">
            <div class="naplacivanje_dijagnoza">
              <h3>Dijagnoza</h3>
            </div>
          </div>
          <div class="flex_row">
            <div class="naplacivanje_usluga">
              <h3>Usluga</h3>
            </div>
          </div>
          <div class="flex_row">
            <div class="naplacivanje_cijena">
              <h3>Cijena</h3>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Naplaćivanje
