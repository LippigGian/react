# React Ecommerce - Readme

Este repositorio contiene la versión final de un proyecto de ecommerce basado en React para CoderHouse.

## Instalación

Para ejecutar este proyecto localmente, debes tener Node.js y npm (Node Package Manager) instalados en tu computadora. Sigue estos pasos para configurar el proyecto:

1. Clona el repositorio:
   ```
   git clone https://github.com/LippigGian/react.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd react/main
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

5. Esto último abrirá tu navegador web y visitará `http://localhost:3000` para ver la aplicación en funcionamiento.

## Características

Este proyecto de ecommerce incluye las siguientes características:

- Listado de productos y filtrado por categoría.
- Página de detalles del producto.
- Funcionalidad de carrito de compras.
- Acceso disponible al carrito de compras en todo momento.
- Proceso de checkout con verificación de email.

## Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

- React
- React Router
- Firebase (Firestore y Autenticación)
- Bootstrap
- React-bootstrap
- Sweet alert
- HTML5
- CSS3

## Estructura de Carpetas

La estructura de carpetas del proyecto está organizada de la siguiente manera:

```
.
├── public/              # Assets públicos y plantilla HTML
├── src/                 # Código fuente
│   ├── components/      # Componentes de interfaz de usuario reutilizables
│   ├── pages/           # Páginas o vistas de la aplicación
│   └── App.js            # Componente principal de la aplicación
├── package.json         # Dependencias del proyecto y scripts
└── README.md            # Documentación del proyecto
```

## Breve review de la aplicación

- Los productos que se renderizan en esta aplicación son solicitados de firebase. 
- El filtrado de productos se realiza del lado del servidor y no del front.
- En el navbar hay un desplegable con 5 categorias distintas.
- Cada card tiene un boton para ver el detalle del producto o para agregarlo al carrito de compras.
- En el carrito de compras veremos el nombre, cantidad individual, precio unitario e importe de cada producto.
- El carrito mostrará el precio total de la compra y la cantidad de productos que se estan llevando.
- En el carrito podremos eliminar uno a uno los productos, o bien vaciar el carrito entero. Ademas de poder finalizar la compra.
- Al finalizar la compra se deberá completar un formulario, en el cual hay una doble verificacion de email.
- Una vez finalizada la compra se nos mostrará el código único de la misma provisto por firestore.