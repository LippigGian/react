import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../../shoppingCartContext/ShoppingCartContext";

const CheckOutForm = ({ totalPrice, enviarCompra }) => {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombre, setNombre] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [telefono, setTelefono] = useState("");
  const [matchError, setMatchError] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMatchError(false);
  };

  const handleEmail2Change = (event) => {
    setEmail2(event.target.value);
    setMatchError(false);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    const inputTelefono = e.target.value;
    // Remover cualquier carácter que no sea un número
    const soloNumeros = inputTelefono.replace(/[^0-9]/g, "");
    setTelefono(soloNumeros);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para verificar que los correos electronicos sean iguales y se envien los formularios
    if (email === email2) {
      //cerrar modal
      handleClose();
      //Datos a enviar a firestore
      const order = {
        comprador: {
          nombre: { nombre },
          email: { email },
          direccion: { direccion },
          telefono: { telefono },
        },
        productos: cart,
        total: totalPrice,
      };
      //Callback
      enviarCompra(order, setEmail, setDireccion, setNombre, setTelefono);
    } else {
      // Los correos electrónicos no coinciden, mostrar error
      setMatchError(true);
    }
  };
  return (
    <div className="d-flex m-2">
      <Button variant="success" className="m-auto" onClick={handleShow}>
        Finalizar compra
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información del cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="email" className="form-label">
                Reingresa correco electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email2}
                onChange={handleEmail2Change}
                required
              />
              {matchError && (
                <p style={{ color: "red" }}>
                  Los correos electrónicos no coinciden.
                </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                value={direccion}
                onChange={handleDireccionChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={telefono}
                onChange={handleTelefonoChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-dark" onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { CheckOutForm };
