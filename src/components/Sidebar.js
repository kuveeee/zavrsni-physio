import React from 'react'
import '../styles/sidebar.css'

//assets
import logo from "../assets/logo.png";

function Sidebar() {
    return (
        <div class="sidebar">
            <img class="logo" src={logo} alt="Logo"></img>
            <div class="break"></div>
            <div class="row">
                <p>RED</p>
            </div>
            <div class="break"></div>
            <div class="row">
                <p>DODAVANJE KLIJENTA</p>
            </div>
            <div class="break"></div>
            <div class="row">
                <p>USLUGE</p>
            </div>
            <div class="row">
                <p>KLIJENTI</p>
            </div>
            <div class="break"></div>
            <div class="row">
                <p>RED</p>
            </div>
        </div >
    )
}

export default Sidebar
