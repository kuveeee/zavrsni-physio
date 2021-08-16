import '../login.css';
import {Fragment} from "react";
import {BrowserRouter  as Router, Switch, Route}  from 'react-router-dom';

//importanje asseta
import logo from '../assets/logo.png';
import physical_image from '../assets/login/physical2x.png';

function Login(){
    return (
        <Fragment>
            <div class="login_body">
                <img class="physical_image" src={physical_image} alt="Physical image" />
                <div class="login_form">
                    <img class="logo" src={logo} alt="Logo"></img>
                    <h1>Kinetic centar</h1>
                    <p>Dobrodošli natrag! Molim prijavite se na račun.</p>
                    <input></input>
                    <br></br>
                    <input></input>
                    <br></br>
                    <button class="prijava">
                        <p>Prijava</p>
                    </button>
                    <button class="registracija">
                        <p>Registracija</p>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;