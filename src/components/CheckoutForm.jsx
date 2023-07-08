import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


const CheckoutForm = ({onSend, enviarCompra}) => {
    const {cart, priceTotal, clear}=useContext(CartContext)
    

//     const [fields, setFields]=useState({
//         name:"",
//         lastName:"",
//         cel:"",
//         email:"",
//     })
  
//   console.log("mostrando datos del Usuario:", fields)
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     onSend(fields);
//     console.log ("su orden se esta procesando", fields)
       
//   }
  
//   const [cart, setCart] = useContext(CartContext);
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
    console.log(priceTotal.value)
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
        total: priceTotal(),
      };
      //Callback
      enviarCompra(order, setEmail, setDireccion, setNombre, setTelefono);
    } else {
      // Los correos electrónicos no coinciden, mostrar error
      setMatchError(true);
    }
  };
  return ( 

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

    // <>             
    //     <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    //     <h1>Datos del Comprador</h1>
    //         <form onSubmit={handleSubmit} id='vaciarform'className="row p-4 text-center needs-validation" >
    //             <div>
    //                 <label className="form-label"></label>
    //                 <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre" value={fields.name} onChange={(e)=>setFields((prevState)=>({...prevState, name: e.target.value}))} required/>
    //                 <div className="valid-feedback">
    //                     campo valido!
    //                 </div>
    //             </div>
    //             <div>
    //                 <label className="form-label"></label>
    //                 <input type="text" className="form-control" id="validationCustom02" placeholder="Apellido" value={fields.lastName} onChange={(e)=>setFields((prevState)=>({...prevState, lastName: e.target.value}))} required/>
    //                 <div className="valid-feedback">
    //                     campo valido!
    //                 </div>
    //             </div>
    //             <div>
    //                 <label className="form-label"></label>
    //                 <input type="number" className="form-control" id="validationCustom03" placeholder="1234567890" value={fields.cel}  onChange={(e)=>setFields((prevState)=>({...prevState, cel: e.target.value}))} required/>
    //                 <div className="valid-feedback">
    //                     campo valido!
    //                 </div>
    //             </div>
    //             <div>
    //                 <label className="form-label"></label>
    //                 <input type="email" className="form-control" id="validationCustom04" placeholder="user@mail.com" value={fields.email} onChange={(e)=>setFields((prevState)=>({...prevState, email: e.target.value}))} required/>
    //                 <div className="valid-feedback">
    //                     campo valido!
    //                 </div>
    //             </div>
    //             <div>
    //                 <button className="btn btn-primary" type="submit" onClick={clear}>Enviar pedido</button>
    //             </div>
    //         </form>
    //     </div>

    // </>    
  )
}

export default CheckoutForm