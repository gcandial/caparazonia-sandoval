# Resumen de proyecto
- El proyecto actual es una tienda de productos para mascotas que incluye productos generales para ejemplificar el funcionamiento, se tienen los items y se puede ver su detalle al dar click al botón que dirige a dicha vista. 
- Una vez que se encuentra en la vista de detalle, se puede seleccionar cuántos productos agregar al carrito, se tiene como límite los de existencia, si el usuario agrega artículos al carrito, se cambia el botón para poder terminar la compra y dirige al carrito de ventas.
- El widget del carrito solo se muestra si se ha agregado al menos un producto, una vez que se va al listado de productos, se puede eliminar del carrito, limpiar completo o finalizar la compra.
Al finalizar la compra se llena un formulario con datos generales del usuario y los envía a firebase, si se generó con éxito la orden, aparece el mensaje de la orden generada.

# Estructura de proyecto
- Navbar
- ItemListContainer
    * ItemList
        * Item
- ItemDetailContainer
    * ItemDetail
        * ItemCount
- Cart
    * CartItem
- BuyForm
- Footer

# Implementación de context
Se utilizó el componente Context.Provider para compartir funciones y valores en los componentes renderizados dentro de éste componente y así poder acceder según se requiera.

# Implementación de bootstrap
Para dar estructura a través de grid, se usó bootstrap para usar componentes y clases ya definidos, como lo son las columnas, las filas, los card y el margin y padding entre componentes.

# Implementación de firebase
Se implementó firebase para crear los documentos que se visualizan como cards en la vista de la página y tienen la función de ser productos.
- Antes de cargar los productos se hace la consulta y de tal forma obtiene del documento creado, la colección de los items.
- Se puede hacer uso de la consulta por filtro o por producto específico.
- De igual forma se implementó un formulario para finalizar la compra y poder guardar en otro documento los datos básicos del usuario, así mismo, su colección que incluye
un arreglo del carrito 
