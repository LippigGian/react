const products =
[
    {
        id: 1,
        nombre: "Buzo 1",
        categoria: "ropa",
        tipo: "buzo",
        desc: "Un buzo que re va con vos",
        precio: 1200,
        talle: "L",
        imagen: 'https://cdn.elburgues.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/_/b_210202_28117_1.jpg',
        cantidad:1
    },

    {
        id: 2,
        nombre: "Remera 1",
        categoria: "ropa",
        tipo: "remera",
        desc: "Una remera que re va con vos",
        precio: 500,
        talle: "L",
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/252/220/products/f837fd4d-2d65-4fd5-ae20-12be9d9ad49f-6a59ba39e3b162a4b016675770109683-640-0.webp',
        cantidad:1
    },

    {
        id: 3,
        nombre: "Camisa 1",
        categoria: "ropa",
        tipo: "camisa",
        desc: "Una camisa que re va con vos",
        precio: 900,
        talle: "S",
        imagen: 'https://equus.vtexassets.com/arquivos/ids/236396/04VCLF1702N5-Z9-1.jpg?v=637921159338330000',
        cantidad:1
    },

    {
        id: 4,
        nombre: "Pantalon 1",
        categoria: "ropa",
        tipo: "pantalon",
        desc: "Una pantalon que re va con vos",
        precio: 1600,
        talle: "L",
        imagen: 'https://marcopololp.com.ar/wp-content/uploads/2021/10/pantalon-drake-verde-old-bridge-marco-polo-1.jpg',
        cantidad:1
    },

    {
        id: 5,
        nombre: "Buzo 2",
        categoria: "ropa",
        tipo: "buzo",
        desc: "Un buzo que re va con vos",
        precio: 1200,
        talle: "L",
        imagen: 'https://www.castizo.com.ar/4889-tm_large_default/buzo-hoodie-erin.jpg',
        cantidad:1
    },

    {
        id: 6,
        nombre: "Remera 2",
        categoria: "ropa",
        tipo: "remera",
        desc: "Una remera que re va con vos",
        precio: 500,
        talle: "L",
        imagen: 'https://cdn.elburgues.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/2/i2021poc10.jpg',
        cantidad:1
    },
    {
        id: 7,
        nombre: "iPhone 13 pro max",
        categoria: "celulares",
        tipo: "celular",
        desc: "Un celu que re va con vos",
        precio: 1500,
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png',
        cantidad:15
    },
    {
        id: 8,
        nombre: "Samsung galaxy s23",
        categoria: "celulares",
        tipo: "celular",
        desc: "Un celular que re va con vos",
        precio: 2500,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhprDZYXNOFNV5PmZ8bcj0nNepFWl0onoxtKbPnersayIdf3_r1HReitauI8NoPva0NPI&usqp=CAU',
        cantidad:18
    },
    {
        id: 9,
        nombre: "xiaomi redmi note 11",
        categoria: "celulares",
        tipo: "celular",
        desc: "Un celular que re va con vos",
        precio: 1850,
        imagen: 'https://www.comeros.com.ar/wp-content/uploads/2022/08/xiaomi-redmi-note-11-pro-5g-6gb-128gb-dual-sim-gris.png',
        cantidad:25
    },
    {
        id: 10,
        nombre: "Moto e6 plus",
        categoria: "celulares",
        tipo: "celular",
        desc: "Un celular que re va con vos",
        precio: 780,
        imagen: 'https://images-eu.ssl-images-amazon.com/images/I/41ldXTuWGbL.jpg',
        cantidad:36
    },
];

export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(()=>
        {
            res(products)
        }, 500)
    })
}

export const pedirItemPorId =(id) =>
{
 
    return new Promise ((res, rejected)=>
    {   
        const item = products.find((elemento)=> elemento.id === id)
        if(item)
        {
        res(item)
        }
        else
        {   
            rejected (
                {
                    error: "no se encontro el producto"
                }
            )
        }

   
    })
}