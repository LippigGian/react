import { ItemCount } from "../itemCount"

const ItemDetail = ({item}) =>
{
   console.log(item)
    return (
            <div className="detail">
                
    <img className="detail-img" src={item.imagen} alt="Card cap"></img>
        <div className="card-sody">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">Descripcion: {item.desc}.</p>
           {item.talle && <h4 className="card-subtitle"> Talle: {item.talle}</h4>}
          <h3 className="card-text"> Precio ${item.precio}</h3>
          <h4>{item.categoria}</h4>
          <h4>{item.cantidad}</h4>
         
                <h3>{item.tipo}</h3>
              
                <ItemCount id={item.id}></ItemCount>
            </div>
            
        </div>
       
    )
}

export {ItemDetail}


/*



    <img className="card-img-top img" src={imagen} alt="Card cap"></img>
        <div className="card-sody">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Descripcion: {desc}.</p>
           {talle && <h4 className="card-subtitle"> Talle: {talle}</h4>}
          <h3 className="card-text"> Precio ${precio}</h3>
          <h4>{categoria}</h4>
          <h4>{cantidad}</h4>


          */