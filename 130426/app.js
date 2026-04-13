function agregarPantalla(value) {
    document.getElementById("display").value += value;
}

function calcularResultado() {
    try {
        const resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }   

}

function limpiarPantalla() {
    document.getElementById("display").value = "";
}       