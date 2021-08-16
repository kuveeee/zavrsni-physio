import '../usluge.css';
import {Fragment} from "react";

//importanje asseta
import logo from "../assets/logo.png";
import trajanje from "../assets/usluge/trajanje.png";
import cijena from "../assets/usluge/cijena.png";

function Usluge () {
    return (
        <div class="body_main">
            <div class="sidebar">
                <img class="logo" src={logo} alt="Logo"></img>
                <div class="break"></div>
                <div class="row">
                    <p>RED</p>
                </div>
                <div class="row">
                    <p>DODAVANJE KLIJENTA</p>
                </div>
                <div class="row_selected">
                    <p>USLUGE</p>
                </div>
                <div class="row">
                    <p>RED</p>
                </div>
            </div>

            <div class ="body">
                <h1>Usluge</h1>
                <div class="rectangle">
                    <p>NAZIV USLUGE</p>
                    <p>TRAJANJE</p>
                    <p>CIJENA</p>
                </div>
                <div class="break"></div>
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
                <div class="break"></div>
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
                <div class="break"></div>
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
    )
}

export default Usluge;