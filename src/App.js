import './nova_rezervacija.css';
import {Fragment} from "react";

//importanje asseta
import logo from "./assets/logo.png"
import sex from "./assets/nova_rezervacija/woman.png";

function NovaRezervacija () {
    return (
        <Fragment>
            <div class="sidebar">
                <img class="logo" src={logo} alt="Logo"></img>
                
            </div>
            <div class="break_column"></div>
            <div class ="body">
                <h1>Nova rezervacija</h1>
                <div class="break"></div>
                
                <div class="klijent">
                    <img class="woman" src={sex} alt="woman"></img>
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

            </div>
        </Fragment>
    )
}

export default NovaRezervacija;