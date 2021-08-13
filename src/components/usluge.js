import './usluge.css';
import {Fragment} from "react";

//importanje asseta
import logo from "./assets/logo.png"

function Usluge () {
    return (
        <Fragment>
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


            </div>
        </Fragment>
    )
}

export default Usluge;