import React, { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { writeToFirestore } from "../services/firebase/ventas";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Checkout = () => {
  const { setCart } = useContext(CartContext);
  // eslint-disable-next-line
  const [orderId, setOrderId] = useState("");
  // eslint-disable-next-line
  const [id, setId] = useState(undefined);

  //Prueba para escribir en firestore
  const enviarCompra = async (
    order,
    setEmail,
    setEmail2,
    setDireccion,
    setNombre,
    setTelefono
  ) => {
    const response = await writeToFirestore(order);

    if (response.success) {
      setCart([]);
      setId(response.id);
      handleButtonClick(response.id);

      // Reiniciar los valores de los campos del formulario
      setEmail("");
      setEmail2("");
      setDireccion("");
      setNombre("");
      setTelefono("");
    } else {
      console.log("no se guardo correctamente en la base de datos.");
    }
  };

  const handleButtonClick = (id) => {
    Swal.fire({
      title: "¡Su orden de compra ha sido creada con exito!",
      text: "Su numero de orden es: " + id,
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <div>
      {!orderId ? (
        <div>
          <CheckoutForm enviarCompra={enviarCompra} />
        </div>
      ) : (
        <div>
          <h3 className="text-center">felicitaciones por su compra!!</h3>
          <h1 className="text-center">numero de pedido:{orderId}</h1>
        </div>
      )}
    </div>
  );
};

export default Checkout;
