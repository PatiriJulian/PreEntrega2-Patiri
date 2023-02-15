import CartWidget from "./CartWidget"
import './NavBar.css'
import logo from '../../assets/logo.png';

function NavBar () {

  return(
    <header class="header NavBarFont">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid NavBarWrapper">
          <img src={logo} alt="" class="NavBarLogo" />
          <div class="navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav NavBarFont">
              <li class="nav-item">
                <a class="nav-link" href="#">Remeras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pantalones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Camisas</a>
              </li>
            </ul>            
          </div>
          <CartWidget/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar