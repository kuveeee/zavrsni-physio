import './styles/Login.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//importanje asseta
import logo from './assets/logo.png';
import physical_image from './assets/login/physical2x.png';

function Signup() {
    return (
        <Fragment>
            <div class="login_body">

                <div class="flex_column">
                    <img class="physical_image" src={physical_image} alt="Physical image" />
                </div>
                <div class="flex_column">
                    <div class="login_form">
                        <div class="flex_row">
                            <img class="logo" src={logo} alt="Logo"></img>
                        </div>

                        <div class="flex_row">
                            <h1>Kinetic centar</h1>
                        </div>
                        <div class="flex_row">
                            <p>Dobrodošli natrag! Molim prijavite se na račun.</p>
                        </div>
                        <input type="email" placeholder="e-mail"></input>
                        <div class="flex_row">
                            <input type="password" placeholder="zaporka"></input>
                        </div>
                        <div class="flex_row">
                            <input type="password" placeholder="ponovite zaporku"></input>
                        </div>
                        <button type="submit" value="Submit" class="registracija">
                            <p>Registracija</p>
                        </button>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Signup;