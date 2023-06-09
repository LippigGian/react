import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../shoppingCartContext/ShoppingCartContext';
import {writeToFirestore} from "../createDocument/createDocument"
import { CheckOutForm } from '../forms/checkout';
import Swal from 'sweetalert2';

const Checkout = ({totalPrice}) => {
    // eslint-disable-next-line
const [cart, setCart] = useContext(CartContext);
    // eslint-disable-next-line
  const [id, setId] = useState(undefined)

  //Prueba para escribir en firestore
const enviarCompra = async (order, setEmail, setDireccion, setNombre, setTelefono)=>{
  const response = await writeToFirestore(order)

  if(response.success)
  {
    setCart([]);
    setId(response.id);
    handleButtonClick(response.id)

    // Reiniciar los valores de los campos del formulario
    setEmail("");
    setDireccion("");
    setNombre("");
    setTelefono("");

  }
  else
  {
    console.log("no se guardo correctamente en la base de datos.")
  }

}
  const handleButtonClick = (id) => {
    Swal.fire({
      title: '¡Su orden de compra ha sido creada con exito!',
      text: 'Su numero de orden es: '+id,
      icon: 'success',
      confirmButtonText: 'Cerrar',
    })
  };

   return (

    <CheckOutForm totalPrice={totalPrice} enviarCompra={enviarCompra} ></CheckOutForm>

  );
};

export {Checkout}







