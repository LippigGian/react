import React, { useContext, useState } from 'react'
import CheckoutForm from './CheckoutForm'
import { ventasData } from '../services/firebase/ventasData'
import {writeToFirestore} from "../services/firebase/ventas"
import { CartContext } from '../context/CartContext'
import Swal from "sweetalert2";



const Checkout = () => {
  const {setCart, priceTotal, clear}=useContext(CartContext)
  const [orderId,setOrder]=useState("")
  const [id, setId] = useState(undefined);
  const venta=(data)=>{
    ventasData(data).then(orderId=>{
      setOrder(orderId);
    })
    
  }
  console.log(orderId)
  

  //Prueba para escribir en firestore
  const enviarCompra = async (
    order,
    setEmail,
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
      {!orderId ?
      <div>
      <CheckoutForm enviarCompra={enviarCompra} onSend={venta}/>
      </div>:
      <div>
        <h3 className='text-center'>felicitaciones por su compra!!</h3>
        <h1 className='text-center'>numero de pedido:{orderId}</h1>
      </div>}
      
    </div>
  )
}

export default Checkout