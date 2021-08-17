import React from 'react'
import { Fragment } from "react";
import Sidebar from './components/Sidebar';
import './styles/osoblje.css'

//assets
import sex_w from "./assets/osoblje/woman.png";

function Osoblje() {
    return (
        <Fragment>
            <div class="flex_row">
                <div class="flex_column">
                    <Sidebar />
                </div>
                <div class="flex_column">
                    <div class="body">
                        <h1>Osobni podaci</h1>
                        <div class="flex_row">
                            <div class="flex_column">
                                <div class="osoblje">
                                            <h3>Roberto <br></br>Čaćan</h3>
                                            <img class="woman" src={sex_w} alt="woman"></img>
                                    <div class="input">
                                        <p>Ime</p>
                                        <input type="text"></input>
                                        <p>Prezime</p>
                                        <input type="text"></input>
                                        <p>Broj telefona</p>
                                        <input type="number"></input>
                                        <p>Datum rođenja</p>
                                        <input type="date"></input>
                                        <p>E-pošta</p>
                                        <input type="email"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="flex_column">
                                <div class="osoblje">
                                    <h3>Roberto Čaćan</h3>
                                    <img class="woman" src={sex_w} alt="woman"></img>
                                    <div class="input">
                                        <p>Ime</p>
                                        <input type="text"></input>
                                        <p>Prezime</p>
                                        <input type="text"></input>
                                        <p>Broj telefona</p>
                                        <input type="number"></input>
                                        <p>Datum rođenja</p>
                                        <input type="date"></input>
                                        <p>E-pošta</p>
                                        <input type="email"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Osoblje;
