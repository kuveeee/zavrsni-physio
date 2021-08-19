import React from "react";
import '../styles/App.css';
import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//assets
import nova_rezervacija from '../assets/nova_rezervacija_slika.png';
import trajanje_usluge from '../assets/usluge/trajanje_usluge.png';
import cijena_usluge from '../assets/usluge/cijena_usluge.png';

function Dashboard() {
    return (
        <Fragment>
            <div class="app_body">
                <br></br>
                <h1>Početna ploča</h1>
                <div class="break"></div>
                <div class="kalendar" >
                    <p>Kalendar</p>
                </div>
                <div class="nova_rezervacija" >
                    <p>Nova rezervacija</p>
                    <img class="nova_rezervacija_slika" src={nova_rezervacija} alt="Nova rezervacija" />
                </div>
                <div class="termini">
                    <p></p>
                </div>
                <div class="break"></div>
                <div class="klijenti" >
                    <p>Klijenti</p>
                    <div class="break"></div>
                    <p>250</p>
                </div>
                <div class="financije" >
                    <p>Financije</p>
                </div>
                <div class="break"></div>
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
                <div class="termini">
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
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;