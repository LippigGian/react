import React, { useState } from 'react';
const EmailForm = () =>{

    
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [matchError, setMatchError] = useState(false);
  
    const handleEmail1Change = (event) => {
      setEmail1(event.target.value);
      setMatchError(false);
    };
  
    const handleEmail2Change = (event) => {
      setEmail2(event.target.value);
      setMatchError(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (email1 === email2) {
        // Los correos electrónicos coinciden, realizar acción adicional
        console.log('Los correos electrónicos coinciden:', email1);
      } else {
        // Los correos electrónicos no coinciden, mostrar error
        setMatchError(true);
      }
    };
  
    return (
       

        <form onSubmit={handleSubmit}>
        <div>
          <label>Email 1:</label>
          <input type="email" value={email1} onChange={handleEmail1Change} />
        </div>
        <div>
          <label>Email 2:</label>
          <input type="email" value={email2} onChange={handleEmail2Change} />
        </div>
        {matchError && <p>Los correos electrónicos no coinciden.</p>}
        <button type="submit">Enviar</button>
      </form>
        
    )
}

export {EmailForm}