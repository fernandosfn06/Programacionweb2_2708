function generarQR() {

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let institucion = document.getElementById("institucion").value.trim();

    // Validación
    if (nombre === "" || email === "" || telefono === "" || institucion === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // TEXTO EN UNA SOLA LÍNEA (IMPORTANTE)
   let textoCompleto = 
`BEGIN:VCARD
VERSION:3.0
N:${nombre}
TEL:${telefono}
EMAIL:${email}
ORG:${institucion}
END:VCARD`;

    // URL QR
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(textoCompleto);

    let qrContainer = document.getElementById("qr");
    qrContainer.innerHTML = "";

    let qrImg = document.createElement("img");
    qrImg.src = url;
    qrImg.alt = "Código QR generado";

    qrImg.style.width = "350px";
    qrImg.style.marginTop = "20px";
    qrImg.style.border = "2px solid #ddd";
    qrImg.style.borderRadius = "10px";

    qrContainer.appendChild(qrImg);
}