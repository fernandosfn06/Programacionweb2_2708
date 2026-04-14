// inicializamos un arreglo vacío
let nombres = [];

//funcion para agregar nombres
function agregarNombre(){
    let nombre = prompt('Ingresa tu nombre: ');
    if(nombre){
        nombres.push(nombre);
        alert(`! Nombre ${nombre} agregado exitosamente`);
    }else{
        alert('El campo no puede estar vacío');
    }
}

//funcion para mostrar nombres
function mostrarNombre(){
    if(nombres.length === 0){
        alert('Arreglo vacío, \n No tenemos nombres');
    }else{
        let mensaje = "Nombres almacenados\n";
        nombres.forEach((nombre, indice)=>{
            mensaje+=`\n${indice + 1} . ${nombre}`;
        });
        alert(mensaje);
    }
}

function mostrarMenu(){

    let opcion;
    do{
        opcion = prompt(`
            OPCIONES DISPONIBLES
            1. Agregar nombre
            2. Mostrar nombre
            3. Salir
            "ELIGE UNA OPCIÓN"
            `);
        
            switch(opcion){
                case '1':
                    agregarNombre();
                    //console.log('estamos en construccion de modulo (agregarNombre ())');
                    break;
                case '2':
                    mostrarNombre();
                    //console.log('estamos en construccion de modulo (mostrarNombre ())');
                    break;
                case '3':
                    alert('Saliendo del programa');
                    break;
                default:
                    alert('Opción no valida, intenta nuevamente...');
            }
    }while(opcion !== 3)
}


//inciar aplicación

 mostrarMenu();