//// Simulador interactivo tienda ////


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const productos = [
    new Producto("Calleras", 7500),
    new Producto("Muñequeras", 3500),
    new Producto("Soga", 5000),
    new Producto("Cinturón", 9000),
    new Producto("Pelota de ejercicio", 5000),
    new Producto("Pesas", 12000),
    new Producto("Colchonetas", 1000)
];

const calcularTotal = (cantidad, precio) => cantidad * precio;

let total = 0;

// Función para buscar y filtrar productos por nombre
function buscarProductoPorNombre(nombre) {
    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
    return resultados;
}

while (true) {
    const seleccionarProductos = Number(prompt(
        "1- Buscar producto por nombre\n2- Calleras $7500\n3- Muñequeras $3500\n4- Soga $5000\n5- Cinturón $9000\n6- Pelota de ejercicio $5000\n7- Pesas $12000\n8- Colchonetas $1000\n0- Finalizar compra"
    ));

    if (seleccionarProductos === 1) {
        const terminoBusqueda = prompt("Ingrese el nombre del producto a buscar:");
        const resultadosBusqueda = buscarProductoPorNombre(terminoBusqueda);

        if (resultadosBusqueda.length > 0) {
            alert("Resultados de la búsqueda:\n" + resultadosBusqueda.map(producto => `${producto.nombre} - $${producto.precio}`).join("\n"));
        } else {
            alert("No se encontraron resultados para la búsqueda.");
        }
    } else if (seleccionarProductos >= 2 && seleccionarProductos <= 8) {
        const cantidad = Number(prompt("Ingrese la cantidad a llevar:"));
        const productoSeleccionado = productos[seleccionarProductos - 2];
        const subtotal = calcularTotal(cantidad, productoSeleccionado.precio);
        total += subtotal;
        alert(`Agregado al carrito: ${productoSeleccionado.nombre} - Subtotal: $${subtotal}`);
    } else if (seleccionarProductos === 0) {
        break;
    } else {
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
}

// Mostrar el total de la compra
alert("El total de la compra es de: $" + total);