import './App.css';
import Header from './Header.js';

//importanje asseta
import nova_rezervacija from './assets/nova_rezervacija_slika.png';
import trajanje_usluge from './assets/trajanje_usluge.png'

function App() {
    return (
    <>
        <Header />
        <div class="app_body">
            <h1>Početna ploča</h1>
            <div class = "calendar_widget" >
                Calender
            </div>
            <div class = "nova_rezervacija" >
                Nova rezervacija 
                <img class="nova_rezervacija_slika" src={nova_rezervacija} alt="Nova rezervacija" />
            </div>
            <div class = "klijenti" >
                Klijenti 
            </div>
            <div class = "financije" >
                Financije 
            </div>
            <div class = "usluge" >
                Usluge
                <div class="tablica">
                    Naziv usluge
                    <img class="trajanje usluge" src={trajanje_usluge} alt="trajanje_usluge"></img>
                </div>
            </div>
        </div>
    </>
    )
}

export default App;