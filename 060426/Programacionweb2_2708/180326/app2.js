var miCarro = new Object();
miCarro.marca = "ford";
miCarro.modelo = "ikon fiesta";
miCarro.anio = 2013;

console.log(miCarro);

var miCarro={
    marca : "ford",
    modelo : "ikon fiesta",
    anio : 2013
}

console.log(miCarro);

const alumno ={
    nombre : "Fernando",
    apellido1 : "Sanchez",
    apellido2 : "Falcon",
    num_contacto : [5561770806,554090734],
    direccion:{
        calle : "Lago Winnipeg",
        numero :{
            exterior : 165,
            interior : 's/n'
        },
        colonia : "Agua Azul",
        alcaldia : "Nezahualcoyotl",
        cp : 57500,
        ciudad : "Estado de Mexico",
        pais : "México"
    },
    educacion:{
        kinder :{
            nombre : "Colegio Yoliliztli",
            privada : true,
            hacerPipi:function(){
                console.log("Maeta me mie");
            }
        },
        primaria :{
            nombre : "Justo Sierra Mendez",
            privada : false,
            tiempoRecreo: '30 min',
            jugar:function(tipoJuego){
                console.log("jugando"+tipoJuego);
            }
        },
        secundaria :{
            nombre : "Francisco J.Mugica",
            privada : false,
            pubertos: true,
            serRebeldes: function(accion){
                console.log("Me sonaron por hacer" + accion);
            }
        }
    },
    actividadesPersonales:{
        lectura: 'Los Juegos del Hambre',
        fisica: 'GYM',
        actividadCotidiana (actvidad){
            return `${this.fisica} en el horario de ${actvidad}`;

        }
    }
};


console.log(alumno.hasOwnProperty());
console.log();
console.log();


alumno.num_cuenta = 321137740; //creara
console.log(alumno);
console.log(alumno['nombre']); //leer
console.log(alumno['num_cuenta']);
console.log(alumno['num_contacto']);
alumno.nombre = "Ingrid"; //actualizar
console.log(alumno['nombre']);
delete alumno.apellido1; //eliminar
console.log(alumno);

console.log(alumno.educacion.kinder.hacerPipi());
console.log(alumno.educacion.secundaria.serRebeldes("platicar"));
console.log.actividadesPersonales.actividadCotidiana("8:00 pm");
