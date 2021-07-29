import './App.css';
import Header from './Header.js';

//importanje asseta
import nova_rezervacija from './assets/nova_rezervacija_slika.png';
import trajanje_usluge from './assets/trajanje_usluge.png';
import cijena_usluge from './assets/cijena_usluge.png';

function App() {
    return (
    <>
        <Header />
        <div class="app_body">
            <h1>Početna ploča</h1>
            <br></br>
            <div class = "kalendar" >
                <p>Kalendar</p>
            </div>
            <div class = "nova_rezervacija" >
                <p>Nova rezervacija</p>
                <img class="nova_rezervacija_slika" src={nova_rezervacija} alt="Nova rezervacija" />
            </div>
            <div class = "klijenti" >
                <p>Klijenti</p>
                250
            </div>
            <div class = "financije" >
                <p>Financije</p> 
            </div>
            <div class = "usluge" >
                <p>Usluge</p>
                <div class="tablica">
                    <ul>
                        <ol>
                            <h3>Naziv usluge</h3>
                        </ol>
                        <ol>
                            <img class="trajanje usluge" src={trajanje_usluge} alt="trajanje_usluge"></img>
                        </ol>
                        <ol>
                        <img class="cijena usluge" src={cijena_usluge} alt="cijena_usluge"></img>
                        </ol>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default App;