function generarLista() {

  var lista = document.querySelector("#lista");
  var cantidad = document.querySelector("#cantidad").value;
  var numeros = [];

  for (var i = 1; i <= cantidad; i++) {
    numeros.push(i);
  }

  lista.innerHTML = "";

  numeros.forEach(function(num) {
    var li = document.createElement("li");
    li.textContent = "Elemento " + num;
    lista.appendChild(li);
  });

}