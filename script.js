document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

    // Eventos
    cargarEventListeners();

    function cargarEventListeners() {
        botonesAgregarCarrito.forEach(btn => {
            btn.addEventListener('click', agregarProducto);
        });
        listaProductos.addEventListener('click', eliminarProducto);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    function agregarProducto(e) {
        e.preventDefault();
        const producto = e.target.parentElement.parentElement;
        const productoSeleccionado = {
            imagen: producto.querySelector('img').src,
            nombre: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.price-1').textContent
        };
        insertarCarrito(productoSeleccionado);
    }

    function insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="50" height="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><a href="#" class="borrar-producto">X</a></td>
        `;
        listaProductos.appendChild(row);
    }

    function eliminarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    function vaciarCarrito() {
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        return false;
    }
    function mostrarMensajeAgregado() {
        alert('Producto agregado al carrito');
    }

    // Dentro de la función agregarProducto, después de insertar el producto en el carrito, llama a la función mostrarMensajeAgregado
    function agregarProducto(e) {
        e.preventDefault();
        const producto = e.target.parentElement.parentElement;
        const productoSeleccionado = {
            imagen: producto.querySelector('img').src,
            nombre: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.price-1').textContent
        };
        insertarCarrito(productoSeleccionado);
        mostrarMensajeAgregado(); // Mostrar mensaje de producto agregado al carrito
    }

});
