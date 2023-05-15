const ItemDetail = ({item}) =>
{
   console.log(item)
    return (
        <div className="container">
            <div className="producto-detalle">
                <h3>{item.precio}</h3>
                <h3>{item.id}</h3>
                <h3>{item.imagen}</h3>
                <h3>{item.desc}</h3>
                <h3>{item.tipo}</h3>
                <h3>{item.categoria}</h3>
                <h3>{item.cantidad}</h3>
                <h3>{item.talle}</h3>
            </div>
        </div>
    )
}

export {ItemDetail}