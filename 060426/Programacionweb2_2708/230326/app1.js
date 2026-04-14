let productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalón', precio: 500},
    {nombre: 'zapatos', precio: 750},
    {nombre: 'sombrero', precio: 350}
];

let carrito = [];

function administrarCatalogo() {
    let nuevoNombre = prompt("Ingresa el nombre del nuevo producto:");
    let nuevoPrecio = Number(prompt("Ingresa el precio del producto:"));

    if (nuevoNombre && !isNaN(nuevoPrecio) && nuevoPrecio > 0) {
        productos.push({ nombre: nuevoNombre, precio: nuevoPrecio });
        alert("Producto '" + nuevoNombre + "' añadido al catálogo exitosamente.");
    } else {
        alert("Datos no válidos. Asegúrate de poner un nombre y un precio numérico.");
    }
}


function mostrarMenu(){
    let menu = "Selecciona un producto a agregar\n";
    for(let i = 0; i < productos.length; i++){
        menu += '\n' + (i + 1) + " . " + productos[i].nombre + " - $" + productos[i].precio;
    }
    menu += '\n' + (productos.length + 1) + " .- Ver carrito y Total";
    menu += '\n' + (productos.length + 2) + " .- Agregar producto";
    menu += '\n' + (productos.length + 3) + " .- Salir";

    return menu;
}


function agregarAlCarrito(index){
    let productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log("Producto " + productoSeleccionado + " Agregar a el carrito");
    console.log("Producto agregado");
}

function mostrarCarritoFinal(){
    if(carrito.length === 0){
        console.log("carrito vacío");
    }else{
        let mensajeCarrito = "Carrito de compras \n";

        var total = 0;
        for(let i = 0; i < carrito.length; i++){
            mensajeCarrito += '\n' + (i + 1) + " . " + carrito[i].nombre + " . $" + carrito[i].precio; //+= para que alamacene el valor mientras hace el bucle
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}


let opcion;

do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if(isNaN(opcion) || opcion < 1 || opcion > productos.length + 2){
        console.log("Opción no valida...");
    }else if( opcion >= 1 && opcion <= productos.length){
        agregarAlCarrito(opcion - 1);
    }else if( opcion === productos.length + 1){
        mostrarCarritoFinal();
    }
}while(opcion !== productos.length + 3);
    console.log('Gracias por su visita :)');
