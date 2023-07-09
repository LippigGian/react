import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutForm = ({ enviarCompra }) => {
  const { cart, priceTotal } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [matchError, setMatchError] = useState(false);

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
    console.log(priceTotal.value);
    e.preventDefault();

    // Lógica para verificar que los correos electronicos sean iguales y se envien los formularios
    if (email === email2) {
      //Datos a enviar a firestore
      const order = {
        comprador: {
          nombre: { nombre },
          email: { email },
          direccion: { direccion },
          telefono: { telefono },
        },
        productos: cart,
        total: priceTotal(),
      };
      //Callback
      enviarCompra(
        order,
        setEmail,
        setEmail2,
        setDireccion,
        setNombre,
        setTelefono
      );
    } else {
      // Los correos electrónicos no coinciden, mostrar error
      setMatchError(true);
    }
  };
  return (
    <div className="form">
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
    </div>
  );
};

export default CheckoutForm;
