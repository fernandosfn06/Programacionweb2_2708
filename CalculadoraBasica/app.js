document.getElementById("CalculadoraForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    const resultado = document.getElementById("resultado");

    let res;
    let simbolo;

    switch(operacion) {
        case "sumar":
            res = num1 + num2;
            simbolo = "+";
            break;
        case "restar":
            res = num1 - num2;
            simbolo = "-";
            break;
        case "multiplicar":
            res = num1 * num2;
            simbolo = "×";
            break;
        case "dividir":
            if (num2 === 0) {
                resultado.innerHTML = `<div class="error">❌ No se puede dividir entre 0</div>`;
                return;
            }
            res = num1 / num2;
            simbolo = "÷";
            break;
    }

    resultado.innerHTML = `
        <div class="resultado-box">
            <h2>Resultado</h2>
            <p class="operacion">${num1} ${simbolo} ${num2}</p>
            <p class="igual">=</p>
            <p class="valor">${res}</p>
        </div>
    `;
});