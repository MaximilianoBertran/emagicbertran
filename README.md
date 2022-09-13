# E-magic es el website e e-commerce del videojuego MMO Epic World

El sitio cuenta con las siguientes secciones:

## Home

Es el primer contacto con el usuario, donde vera enlace de descargas y un poco de info del mundo.

## About us

Es una pagina con información básica de Patata Studios, la desarrolladora del MMO.

## Market

El corazon del sitio. El market da la lista completa de los articulos en venta y algunas funcionalidades que adelante se detallan:

- Detalle: se puede entrar a cada item del listado para ver sus detalles (descripcion, stock, financiación)
- Sumar a carrito: tanto del listado como de la vista detalle podemos sumar objetos al carrito (en caso de que el objeto a agregar ya este en el carrito se sumara a la cantidad del registro existente NO se duplica el registro)
- Financiación: se ofrece una vista previa a la financiación del producto a valor unitario desde la vista de detalle.

## Categories

Es un filtro para los objetos del Market filtrado por las categorias de los mismos. Un item puede tener varias categorias.

## Register

El registro de usuarios es importante, sin estar registrado no es posible realizar compras.

## Login

Inicio de sesión con cuenta ya registrada (no guarda la sesión abierta).

## Profile

La sección de Profile permite cambiar la contraseña o actualizar email y telefono.

## Logout

Cierre de sesión.

## Carrito

El último paso del proceso de compra sus funcionalidades se detallan acontinuación:

-Cambios: se puede sumar, restar, eliminar items del carrito o vaciarlo con un click.
-Login: es necesario estar logueado
-Financiación: Permite financiar la compra, muestra opciones de cuotas (3,6,9 y 12) con el interes segun cuotas elegidas (1 y 3 no tienen interes).
-Finalizar operación: al elegir la financiación y ejecutar el pago se toma registro de la operación, se restan los objetos del stock y se devuelve un orderID.

## Netlify

Se puede encontrar una vista previa del sitio en:
https://e-magic.netlify.app/
