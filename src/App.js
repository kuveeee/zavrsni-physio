import React from "react";
import './App.css';
import {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom';
import Header from './components/Header';
//import Login from './components/login';
import Kalendar from './components/Kalendar';
import Usluge from './components/Usluge';

//importanje asseta
import nova_rezervacija from './assets/nova_rezervacija_slika.png';
import trajanje_usluge from './assets/trajanje_usluge.png';
import cijena_usluge from './assets/cijena_usluge.png';

class App extends React.Component {
    render() {
        return (
                <Fragment>
                    <Router>
                        <Header />
                        <div class="app_body">                
                            <br></br>
                            <h1>Početna ploča</h1>
                            <div class="break"></div>
                            <div class = "kalendar" >
                                <Link to="/kalendar"> 
                                    <p>Kalendar</p>
                                 </Link>
                            </div>
                            
                            <div class = "nova_rezervacija" >
                                <p>Nova rezervacija</p>
                                <img class="nova_rezervacija_slika" src={nova_rezervacija} alt="Nova rezervacija" />
                            </div>
                            <div class="termini">
                                <p></p>
                            </div>
                            <div class="break"></div>
                            <div class = "klijenti" >
                                <p>Klijenti</p>
                                250
                            </div>
                            <div class = "financije" >
                                <p>Financije</p> 
                            </div>
                            <div class="break"></div>
                            <div class = "usluge" >
                                <Link to="/usluge"> 
                                    <p>Usluge</p>
                                 </Link>
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
                            <div class="termini">
                                <p>Termin</p>
                                <div class="termin">
                                    Termin 1
                                </div>
                                <div class="termin">
                                    Termin 1
                                </div>
                                <div class="termin">
                                    Termin 1
                                </div>
                                <div class="termin">
                                    Termin 1
                                </div>
                                <div class="termin">
                                    Termin 1
                                </div>
                                <div class="termin">
                                    Termin 1
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/kalendar">
                                <Kalendar />
                            </Route>
                            <Route path="/usluge">
                                <Usluge />
                            </Route>
                        </Switch>
                    </Router>
                </Fragment>
        );
    }
}

export default App;