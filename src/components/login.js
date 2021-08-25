import '../styles/Login.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Registracija from './Registracija';

//importanje asseta
import logo from '../assets/logo.png';
import physical_image from '../assets/login/physical2x.png';

function Login() {
    return (
        <Router>
            <div class="login_body">
                <div class="flex_row">
                    <div class="flex_column">
                        <img class="physical_image" src={physical_image} alt="Physical image" />
                    </div>
                    <div class="flex_column">
                        <div class="login_form">
                            <img class="logo" src={logo} alt="Logo"></img>
                            <div class="break"></div>
                            <div class="h1_login">
                                <h1>Kinetic centar</h1>
                            </div>
                            <div class="break"></div>
                            <div class="dobrodosli">
                                <h2>Dobrodošli natrag! Molim prijavite se na račun.</h2>
                            </div>
                            <div class="break"></div>
                            <input type="email" placeholder="e-mail"></input>
                            <div class="break"></div>
                            <input type="password" placeholder="ponovite zaporku"></input>
                            <div class="break"></div>
                            <Link exact to="/Dashboard">
                                <button class="prijava">
                                    <p>Prijava</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/Dashboard" component={Dashboard} />
                {/* <Route path="/Registracija" component={Registracija} /> */}
            </Switch>
        </Router >
    )
}

export default Login;