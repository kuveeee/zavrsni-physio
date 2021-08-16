import React from 'react'
import './styles/usluge.css';
import { Fragment } from "react";
import Sidebar from './components/Sidebar';
//importanje asseta
import logo from "./assets/logo.png";
import trajanje from "./assets/usluge/trajanje.png";
import cijena from "./assets/usluge/cijena.png";

function Usluge() {
    return (
        // <div class="body_main">
        <Fragment>
            <div class="row">
                <div class="column">
                    <Sidebar />
                </div>
                <div class="column">
                    <div class="body">
                        <h1>Usluge</h1>
                        <div class="break"></div>
                        <div class="rectangle">
                            <p>NAZIV USLUGE</p>
                            <p>TRAJANJE</p>
                            <p>CIJENA</p>
                        </div>
                        <div class="rectangle">
                            <div class="usluga">
                                <h3>Usluga 1</h3>
                            </div>
                            <div class="trajanje">
                                <h3>Trajanje</h3>
                                <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                            </div>
                            <div class="cijena">
                                <h3>Cijena</h3>
                                <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                            </div>
                        </div>
                    </div>
                    <div class="rectangle">
                        <div class="usluga">
                            <h3>Usluga 1</h3>
                        </div>
                        <div class="trajanje">
                            <h3>Trajanje</h3>
                            <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                        </div>
                        <div class="cijena">
                            <h3>Cijena</h3>
                            <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                        </div>
                    </div>
                    <div class="rectangle">
                        <div class="usluga">
                            <h3>Usluga 1</h3>
                        </div>
                        <div class="trajanje">
                            <h3>Trajanje</h3>
                            <img class="trajanje" src={trajanje} alt="Trajanje usluge"></img>
                        </div>
                        <div class="cijena">
                            <h3>Cijena</h3>
                            <img class="cijena" src={cijena} alt="Cijena usluge"></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        // </div>
    )
}

export default Usluge;