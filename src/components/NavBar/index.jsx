import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
<nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container-fluid bg-primary">
    <a className="navbar-brand text-white" href="#">Ecommerce</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white " aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
     
          <div className="products">
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Celulares</a></li>
          <li><a className="dropdown-item" href="#">Televisores</a></li>
          <li><a className="dropdown-item" href="#">Computadoras</a></li>
          <li><a className="dropdown-item" href="#">Ropa</a></li>
          <li><a className="dropdown-item" href="#">Aire acondiconado</a></li>
        </ul>
        </div>
       
        </li>
      </ul>
     
      <CartWidget></CartWidget>
      
    </div>
  </div>

</nav>
    )
}

export {NavBar}