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
        cantidad: 4
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
        cantidad: 9
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
        cantidad:18
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
        cantidad:100
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
        cantidad:12
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
    {
        id: 11,
        nombre: "Notebook Lenovo",
        categoria: "computadoras",
        tipo: "computadoras",
        desc: "Notebook Lenovo Ip 15itl6 I5 8gb Ssd 256gb W11 Home 15.6",
        precio: 385000,
        imagen: 'https://mla-s1-p.mlstatic.com/788348-MLA52749334165_122022-F.jpg',
        cantidad:39
    },
    {
        id: 12,
        nombre: "Notebook Dell",
        categoria: "computadoras",
        tipo: "computadoras",
        desc: "NOTEBOOK DELL 15.6 INSPIRON 3515 RYZEN5 8G 256GB W11HOME",
        precio: 245000,
        imagen: 'https://www.comeros.com.ar/wp-content/uploads/2022/05/INSPIRON-3515-O2.jpg',
        cantidad:55
    },
    {
        id: 13,
        nombre: "Notebook Asus",
        categoria: "computadoras",
        tipo: "computadoras",
        desc: "NOTEBOOK ASUS VIVOBOOK X1502ZA-EJ192W 15,6 INTEL CORE I7 8GB 512GB SSD WINDOWS 11 | Start_ ",
        precio: 350000,
        imagen: 'https://images.start.com.ar/X1502ZA-EJ192W.jpg',
        cantidad:66
    },
    {
        id: 14,
        nombre: "Tv LG",
        categoria: "televisores",
        tipo: "televisores",
        desc: "LG Smart TV HD 32 pulgadas | Televisores LG",
        precio: 125000,
        imagen: 'https://www.lg.com/ar/images/televisores/md05781190/gallery/large07_1.jpg',
        cantidad:84
    },
    {
        id: 15,
        nombre: "Tv LED samsung",
        categoria: "televisores",
        tipo: "televisores",
        desc: "Smart TV Led 32” Samsung DR32X7000",
        precio: 104000,
        imagen: 'https://images.fravega.com/f500/f7ef2edea1d230f88f25d52cb1ddd3fe.jpg',
        cantidad:4
    },
    {
        id: 16,
        nombre: "Aire acondicionado portatil",
        categoria: "aire acondicionado",
        tipo: "aire acondicionado",
        desc: "Aire Acondicionado Portátil Tcl Frío-calor 3500fr Ms",
        precio: 78000,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_850580-MLA40987025660_032020-O.webp',
        cantidad:35
    },
    {
        id: 17,
        nombre: "Aire TCL 5100W",
        categoria: "aire acondicionado",
        tipo: "aire acondicionado",
        desc: "TCL Aire Acondicionado 5100W Frio Calor ELIT Efic.-A- TACA-5100FCSA/EL",
        precio: 250000,
        imagen: 'https://shiftdigital.com.ar/images/TCL%20Aire%20Acondicionado%203300W%20TACA-3300FCSAEL%205.jpg',
        cantidad:98
    }
];

export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(()=>
        {
            res(products)
        }, 10)
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