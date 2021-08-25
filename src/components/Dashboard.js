import React from "react";
import '../styles/App.css';
import '../styles/Dashboard.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NovaRezervacija from '../components/NovaRezervacija';
import Naplaćivanje from '../components/Naplaćivanje';
import Klijenti from '../components/Klijenti';
import Usluge from '../components/Usluge';

//assets
import nova_rezervacija from '../assets/nova_rezervacija_slika.png';
import trajanje_usluge from '../assets/usluge/trajanje_usluge.png';
import cijena_usluge from '../assets/usluge/cijena_usluge.png';

function Dashboard() {
    return (
        <Router>
            <div class="app_body">
                <br></br>
                <h1>Nadzorna ploča</h1>
                <div class="break"></div>
                <Link exact to="/Kalendar">
                    <div class="kalendar" >
                        <p>Kalendar</p>
                    </div>
                </Link>
                <Link exact to="/Nova-Rezervacija">
                    <div class="nova_rezervacija" >
                        <p>Nova rezervacija</p>
                        <img class="nova_rezervacija_slika" src={nova_rezervacija} alt="Nova rezervacija" />
                    </div>
                </Link>
                <div class="termini">
                    <p></p>
                </div>
                <div class="break"></div>
                <Link exact to="/Klijenti">
                    <div class="klijenti" >
                        <p>Klijenti</p>
                        <div class="break"></div>
                        <p>250</p>
                    </div>
                </Link>
                <div class="financije" >
                    <p>Financije</p>
                </div>
                <div class="break"></div>
                <Link exact to="/Usluge">
                    <div class="usluge" >
                        <p>Usluge</p>
                        <div class="tablica">
                            <ul>
                                <ol>
                                    <h3>Naziv usluge</h3>
                                </ol>
                                <ol>
                                    <img class="trajanje usluge" src={trajanje_usluge} alt="trajanje_usluge"></img>
                                </ol>
                                <ol>
                                    <img class="cijena usluge" src={cijena_usluge} alt="cijena_usluge"></img>
                                </ol>
                            </ul>
                        </div>
                    </div>
                </Link>
                <Link exact to="/Naplaćivanje">
                    <div class="naplacivanje" >
                        <p>Naplaćivanje</p>
                    </div>
                </Link>
                {/* <div class="termini">
                    <p>Slijedeći termini</p>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                    <div class="termin">
                        <p><strong>Lorem ipsum</strong> sa Saeed Kay</p>
                        <div class="break"></div>
                        <p>08:00-09:00</p>
                    </div>
                </div> */}
            </div>
            <Switch>
                <Route path="/Nova-Rezervacija" component={NovaRezervacija} /> {/* kriv naziv rute al ok */}
                <Route path="/Naplaćivanje" component={Naplaćivanje} />
                <Route path="/Klijenti" component={Klijenti} />
                <Route path="/Usluge" component={Usluge} />
            </Switch>
        </Router >
    );
}

export default Dashboard;