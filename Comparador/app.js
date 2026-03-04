var a = parseInt(prompt("Ingresa el primer numero"));
var b = parseInt(prompt ("Ingresa el segundo numero"));

console.log("\nComparando: " + a + " vs " + b);

if(a>b){
    console.log(a + "es mayor que " +b);

} else if(a<b){
    console.log(a + "Es menor que" + b);
} else { 
    console.log(a + "Es igual que" + b);
}
