import './Header.css';

//importanje asseta
import logo from './assets/logo.png';
import slika_profila from './assets/slika_profila.png';

function Header() {
    return(
    <>
        <div class="header_body">
            <div class="logo">
                <img src={logo} alt="Logo"></img>
            </div>
            <div calss="datum_vrijeme">
                <iframe title="Datum i vrijeme" src="https://free.timeanddate.com/clock/i7wvbhef/n4461/tlhr30/fn17/fs30/tt0/tw0/tm1/ts1" frameborder="0" width="312" height="39"></iframe>
            </div>
            <div class="korisnik">
                <p>Roberto</p>
                <img class="slika_profila" src={slika_profila} alt="Slika profila" />
            </div>
        </div>
    </>
    )
  }
  
export default Header;