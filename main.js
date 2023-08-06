/* let usuario = "julianperry97";
let contraseña = "26084";

function ingresarUsuario(){
    let otroUsuario  = prompt("Ingresar su nombre de usuario");
    return otroUsuario;
}

function ingresarContraseña(){
    let otraContraseña = prompt("Ingresar su contraseña");
    return otraContraseña;
}

let i = 26084;
while (i === 26084){
    if (usuario == ingresarUsuario() ){
        if (contraseña == ingresarContraseña()){
            alert("Bienvenido a nuestra plataforma: Julian Puebla");
            break;
        } else {
            alert("El usuario ingresado o la contraseña son incorrectos");
        }
    } else  {
        if (contraseña !== ingresarContraseña()){
        alert("El usuario ingresado o la contraseña son incorrectos");
        } else {
            alert("El usuario ingresado o la contraseña son incorrectos");
        }
    } */


    //// Simulador interactivo tienda ////

    alert("Ingrese la opcion del producto que desea llevar, para finalizar compra ingrese 0")
let seleccionarProductos = Number(prompt("1-Calleras $7500 2-Muñequeras $3500 3-Soga $5000 4-Cinturon $9000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Calleras, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 7500)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Muñequera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3500)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Soga, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 5000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Cinturon, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 9000)
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Calleras $7500 2-Muñequeras $3500 3-Soga $5000 4-Cinturon $9000 "))
}

alert("el total de la compra es de: " + total)
    

