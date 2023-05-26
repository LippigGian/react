import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../shoppingCartContext/ShoppingCartContext"
import carrito from "../CartWidget/Assets/icon-cart.png"

const NavBar = () => {
  // eslint-disable-next-line
  const [cart, setCart] =useContext(CartContext);
  const quantity = cart.reduce((acc, currentItem ) => {
return acc + currentItem.quantity;
  },0 );
    return(
<nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container-fluid bg-primary">
    <Link className="navbar-brand text-white" to="/">Ecommerce</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact-us">Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <div className="products">
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/productos/celulares">Celulares</Link></li>
          <li><Link className="dropdown-item" to="/productos/televisores">Televisores</Link></li>
          <li><Link className="dropdown-item" to="/productos/computadoras">Computadoras</Link></li>
          <li><Link className="dropdown-item" to="/productos/ropa">Ropa</Link></li>
          <li><Link className="dropdown-item" to="/productos/aire acondicionado">Aire acondiconado</Link></li>
          
        </ul>
        </div>
        </li>
      </ul>
      
      <div>

<Link to="/cart"><img src={carrito} alt="cart-widget"></img></Link>
({quantity})

</div>
  </div>
  </div>

</nav>
    )
}

export {NavBar}