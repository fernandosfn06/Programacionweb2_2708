let numMaquina = Math.floor(Math.random() * 10) + 1;
let vidas = 3;

while (vidas > 0) {
    let intento = parseInt(prompt("Adivina el número (1-10)"));
    
    if (intento === numMaquina) { 
        console.log("Ganaste!"); 
        console.log("El nuúmero es " + numMaquina);
        break; 
    }else{
        vidas--;
        console.log("¡Incorrecto! Te quedan " + vidas + " intentos.");
        if(vidas == 0){
            console.log("El número correcto era: " + numMaquina);
        }
    }
}