import './Header.css';

//importanje asseta
import slika_profila from './assets/slika_profila.png';

function Header() {
    return(
    <>
        <div class="header_body">
            <div class="logo">
                <img src='./assets/logo.png' alt="Logo"></img>
            </div>
            <iframe title="Datum i vrijeme" src="https://free.timeanddate.com/clock/i7wvbhef/n4461/tlhr30/fn17/fs30/tt0/tw0/tm1/ts1" frameborder="0" width="312" height="39"></iframe>
            <h1>HEADER HEADER IS HERE</h1>
            Roberto
            <img class="slika_profila" src={slika_profila} alt="Slika profila" />
        </div>
    </>
    )
  }
  
export default Header;