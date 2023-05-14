export const Item =({nombre, tipo, desc, precio, talle, cantidad, id, imagen, categoria})=> {
    
    return (
      
                                    
                                        <div className="card" >
                                            
        <img className="card-img-top img" src={imagen} alt="Card cap"></img>
        <div className="card-sody">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Descripcion: {desc}.</p>
           {talle && <h4 className="card-subtitle"> Talle: {talle}</h4>}
          <h3 className="card-text"> Precio ${precio}</h3>
          <h4>{categoria}</h4>
          <h4>{cantidad}</h4>
          <button  id={id} className="btn btn-primary agregar" >Agregar al carrito</button>
    
        </div>
      </div>
                                       
       
    )
}

/*    <div>{nombre}</div>
                                        <div>{tipo}</div>
                                        <div>{desc}</div>
                                        <div>{precio}</div>
                                        <div>{talle}</div>
                                        <div>{cantidad}</div>
                                        <div>{id}</div>
                                        <div><img src={imagen} className="img"></img></div>
                                        */