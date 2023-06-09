import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CartContext } from '../shoppingCartContext/ShoppingCartContext';
import {writeToFirestore} from "../createDocument/createDocument"

const Checkout = ({totalPrice}) => {
const [cart, setCart] = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nombre, setNombre] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [telefono, setTelefono] = useState('');
  const [id, setId] = useState(undefined)

  const handleClose = () => {
    setShowModal(false);
    setId(undefined)
  };

  const handleShow = () => {
    setShowModal(true);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
    console.log('Email:', email);
    console.log('Dirección:', direccion);
    console.log('Nombre:', nombre);
    console.log('Teléfono:', telefono);

       // Reiniciar los valores de los campos del formulario
       setEmail('');
       setDireccion('');
       setNombre('');
       setTelefono('');

       //Enviar datos a firestore
       const order = { comprador: {nombre: {nombre}, email:{email}, direccion:{direccion}, telefono: {telefono}},
                        productos: cart,
                      total: totalPrice}
      //  writeToFirestore(order).then(()=>{
      //    //Vaciar carrito, aunque faltaria validar antes de eliminar
       
      //   setCart([]);
      //  });
      escribir(order)
  
      
        
      
      
  };



  //Prueba para escribir en firestore
const escribir = async (order)=>{
  const response = await writeToFirestore(order)

  if(response.success)
  {
    setCart([]);
    setId(response.id);
  }
  else
  {
    console.log("no se guardo correctamente en la base de datos.")
    
    
  }


}


  // const writeToFirestore = async (order) => {
  //   const db = getFirestore();
  //   const collectionRef = collection(db, 'buyers');
  //   try {   
  //     //destructuro el id y ya lo guardo directamente
  //     const {id} = await addDoc(collectionRef, order)
  //     console.log('Documento agregado correctamente');
  //     setId(id)
  //     console.log(id)
     
     
  //     // return id;

  //     //o también puedo enviarlo como respuesta.id
  //   } catch (error) {
  //     console.error('Error al agregar el documento:', error);
  //   }
  // };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    const soloNumeros = inputTelefono.replace(/[^0-9]/g, '');
    setTelefono(soloNumeros);

  };

  return (
     <>

     <Button variant="success" className='m-auto' onClick={handleShow}>
        Finalizar compra
      </Button>
      {/* <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>

        </Modal.Header>
      </Modal> */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información del cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="form-text">Por favor, introduce un correo electrónico válido.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">Dirección</label>
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
        <label htmlFor="nombre" className="form-label">Nombre completo</label>
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
        <label htmlFor="telefono" className="form-label">Teléfono</label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          value={telefono}
          onChange={handleTelefonoChange}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
        </Modal.Body>
        
        <Modal.Footer>
        {id && <><h3>¡Su orden de compra ha sido creada con exito!</h3>
                <h2>Su numero de orden es: {id}</h2></>}
         
        <button className='btn btn-dark' onClick={handleClose}>Cerrar</button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};

export {Checkout}







