import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-primary ">
    <div className="container-fluid bg-primary">
      <Link className="navbar-brand text-white" to="/">
        Ecommerce
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/contact-us">
              Contacto
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle text-white "
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </NavLink>
            <div className="products">
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/categoryId/celulares">
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoryId/televisores"
                  >
                    Televisores
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoryId/computadoras"
                  >
                    Computadoras
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoryId/ropa">
                    Ropa
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoryId/aire acondicionado"
                  >
                    Aire acondiconado
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <CartWidget/>
      </div>
    </div>
  </nav>

    // <>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
          
    //       <Link to={'/'} className="navbar-brand"><img src={logo} alt="logo"width="100" height="100" className="d-inline-block align-top"/></Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
          
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">            
    //           <li className="nav-item dropdown">
    //             <NavLink to={'/category/categoryId'}className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Categorias
    //             </NavLink>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li><Link className="dropdown-item" to={'/categoryId/celulares'}>Celulares</Link></li>
    //               <li><Link className="dropdown-item" to={'/categoryId/televisores'}>Televisores</Link></li> 
    //               <li><Link className="dropdown-item" to={'/categoryId/computadoras'}>Computadoras</Link></li>
    //               <li><Link className="dropdown-item" to={'/categoryId/ropa'}>Ropa</Link></li>
    //               <li><Link className="dropdown-item" to={'/categoryId/aire acondicionado'}>Aire acondicionado</Link></li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link disabled" tabIndex="-1" aria-disabled="true">Contactos</NavLink>
    //           </li>    
    //         </ul>
    //         <CartWidget/>
    //       </div>
    //     </div>
        
    //   </nav> 
    // </>
  )
}

export default NavBar