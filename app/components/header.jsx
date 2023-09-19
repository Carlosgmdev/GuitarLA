import {Link} from "@remix-run/react";
import logo from '../../public/img/logo.svg'
import Nav from "./nav";

const Header = () => {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="logotipo" />
        </Link>
        <Nav/>
      </div>
    </header>
  )
}

export default Header