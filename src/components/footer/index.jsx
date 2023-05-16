import {Link} from"react-router-dom"
const Footer = () =>{

    return (
       
        <footer style={{background: "#333", color:"#FFF"}} className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <a href="https://example.com"><img src="https://example.com/assets/img/logo.png" alt="Company Logo"></a> */}
              <p>Copyright &copy; 2023 E-commerce</p>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li><Link to="/contact-us">Contactanos</Link></li>
                <li><Link to="#">Terminos y condiciones</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
}
export {Footer}

