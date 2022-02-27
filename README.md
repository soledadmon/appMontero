# IMPORTANTE
EN LA CARPETA PUBLIC DEL PROYECTO HAY UNA SUBCARPETA LLAMADA VIDEOS DONDE HAY UN VIDEO EN EL QUE SE MUESTRA UNA BREVE DESCRIPCION DE COMO SE COMPORTA LA APLICACION

# Ejecucion  
para ejecutar el proyecto iniciar con el comando npm start

Se utilizaron dos bibliotecas externas para el manejo de los mensajes, para esto se instalo a través de npm:

- npm install sweetalert --save:  Para mostrar todos los avisos 

- npm add react-toastify:         Para informar los elementos agregados al carrito

Para el manejo de información se creo una base de información utilizando firestore.
Para poder utilizar firestore se debe instalar a través de npm con el comando npm install

-  firebase@8.8.0, 8.8.0 es la vesión utilizada en este proyecto

# Inicio
El proyecto comenzará con una página de inicio, que contiene:
- la barra de navegación con el ítem carrito 
- el div principal que contiene una imagen importada de la carpeta public -> imagenes
- el cacceso a través de la navbar a todos los productos
- el acceso a través de la navbar por categorías
- el acceso a través de la navbar a cada categoría
- el desarollo del carro de compras con el formulario de pago y la comra preservada en firestore

# Estructura
La página contendrá categorías propias de una heladería, dentro de cada categoría están los productos que corresponden a cada categoría.
Cada producto tiene sus detalles y su contador para administrar a futro el stock.
# Solo para cumplir con los requerimientos de esta entrega hay una ruta para mostrar todos los productos pero la idea a sería solo mostrarlos por categoría

# Rutas establecidas

/              -> Portada o página de inicio

/category/:id  -> muestra los productos de una categoría 

/productos/:id -> id = 0 para que muestre todos los productos que tiene la heladería

/categorias    -> muestra todas las categorías por las cuales se agrupan los productos

/item/:id      -> muestra el detalle del producto

/cart          -> muestra el carrito de compras

# navbar 
- la navbar tiene prestablecidas todas las rutas salvo la ruta al detalle que solo se puede acceder desde la barra con /category/:id o desde el botón "Ver Detalle" que esta en el Item (Producto), la diferencia ente el producto y el detalle del producto se ve sobre todo en la categoria dos y tres no tanto en la 1, osea para los id > 4

# Cart
El carrito es accsesible desde toda la aplicación y en él se registran todos los productos que el cliente desee agregar, para ello se utiliza un Contexo que provee la información llamado CartProvider.jsx
En el carro se mustra el total de productos y el importe total de lo que sería la compra si el cliente lo confirma.

Cuando el cliente seleccione el producto que deseea comprar se mostrará el detalle y en el detalle del producto se da la opción de agregar el producto al carrito.
Una vez que se agrego el producto al carrito se le ofrese al cliente la opcion de terminar la compra.
En cualquier momento el cliente puede cliquear en el icono del carrito de la navbar para acceder a lo que éste contenga.

Se le informa al cliente que para poder finalizar la compra deberá competar los datos que se le solicitan, TODOS los datos solicitados son obligatorios, y como lo solicita le letra se valida que el mail sea valido y se verifica con un ingreso duplicado.

# Compra

Cuando el cliente realiza la comra se le informa el número de id y no se da la opcion a cliquear en el boton de comprar para que la compra NO se ralice 2 veces por error.
El acceso que queda visible es el botón que brinda la posibilidad al cliete a "Volver a comprar"

Si no hay una orden de compra se muestra el botón comprar, pero si la compra ya se realizo y se generó su id correspondiente, entonces se muestra el botón "Volver a Comprar" con el que se vacía el carrito y se permite seguir cocmprado.

De la compra se preserva la información correspondiente al cliente(todos los datos del formulario), y la orden de compra(la lista de todos los productos ingresados al carro)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
