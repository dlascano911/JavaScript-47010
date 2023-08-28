class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const productos = [
    new Producto("Calleras", 7500, "https://http2.mlstatic.com/D_NQ_NP_2X_934676-MLA51656385026_092022-F.webp"),
    new Producto("Muñequeras", 3500, "https://http2.mlstatic.com/D_NQ_NP_2X_647342-MLA71259058204_082023-F.webp"),
    new Producto("Soga", 5000, "https://http2.mlstatic.com/D_NQ_NP_2X_783722-MLA70257450564_072023-F.webp"),
    new Producto("Cinturón", 9000, "https://http2.mlstatic.com/D_NQ_NP_2X_918878-MLA70486175523_072023-F.webp"),
    new Producto("Pelota de ejercicio", 5000, "https://http2.mlstatic.com/D_NQ_NP_2X_650447-MLA31115685820_062019-F.webp"),
    new Producto("Pesas", 12000, "https://http2.mlstatic.com/D_NQ_NP_2X_788857-MLA44728266196_012021-F.webp"),
    new Producto("Colchonetas", 1000, "https://http2.mlstatic.com/D_NQ_NP_2X_658133-MLA50724939079_072022-F.webp")
];

const calcularTotal = (cantidad, precio) => cantidad * precio;

const productosContainer = document.querySelector('.productos');
const carritoLista = document.querySelector('.carrito-lista');
const totalElement = document.getElementById('total');
const finalizarCompraButton = document.getElementById('finalizar-compra');

function mostrarProductos() {
    productosContainer.innerHTML = productos.map((producto, index) => `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <span>${producto.nombre} - $${producto.precio}</span>
            <input type="number" class="cantidad" min="1" value="1">
            <button class="agregar-carrito" data-index="${index}">Agregar al carrito</button>
        </div>
    `).join('');
}

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoLista.innerHTML = carrito.map((item, index) => `
        <li>
            <img src="${item.imagen}" alt="${item.nombre}" class="miniatura">
            ${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}
            <button class="eliminar-producto" data-index="${index}">Eliminar</button>
        </li>
    `).join('');

    const total = carrito.reduce((acc, item) => acc + item.subtotal, 0);
    totalElement.textContent = total;
}
function agregarAlCarrito(event) {
    if (event.target.classList.contains('agregar-carrito')) {
        const index = parseInt(event.target.dataset.index);
        const cantidad = parseInt(event.target.previousElementSibling.value);
        const productoSeleccionado = productos[index];
        const subtotal = calcularTotal(cantidad, productoSeleccionado.precio);

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push({
            nombre: productoSeleccionado.nombre,
            cantidad: cantidad,
            subtotal: subtotal,
            imagen: productoSeleccionado.imagen
        });
        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarCarrito();
    }
}

function eliminarDelCarrito(event) {
    if (event.target.classList.contains('eliminar-producto')) {
        const index = parseInt(event.target.dataset.index);

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarCarrito();
    }
}

function finalizarCompra() {
    localStorage.removeItem("carrito");
    actualizarCarrito();
    alert("¡Compra finalizada! Gracias por su compra.");
}

mostrarProductos();
actualizarCarrito();
productosContainer.addEventListener('click', agregarAlCarrito);
carritoLista.addEventListener('click', eliminarDelCarrito);
finalizarCompraButton.addEventListener('click', finalizarCompra);
