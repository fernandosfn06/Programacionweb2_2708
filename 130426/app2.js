function generarQR() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let institucion = document.getElementById("Institucion").value.trim();
    
    // Validar que todos los campos estén completo
    if (nombre === "" || email === "" || telefono === "" || institucion === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    
    // Crear el texto completo para el QR
    let textoCompleto = "Nombre: " + nombre + "\nEmail: " + email + "\nTeléfono: " + telefono + "\nInstitución: " + institucion;
    
    // Crear la URL del QR usando QRServer API
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(textoCompleto);
    
    // Limpiar el contenedor anterior
    let qrContainer = document.getElementById("qr");
    qrContainer.innerHTML = "";
    
    // Crear la imagen del QR
    let qrImg = document.createElement("img");
    qrImg.src = url;
    qrImg.alt = "Código QR generado";
    qrImg.style.width = "350px";
    qrImg.style.height = "350px";
    qrImg.style.marginTop = "20px";
    qrImg.style.border = "2px solid #ddd";
    qrImg.style.borderRadius = "10px";
    
    // Agregar la imagen al contenedor
    qrContainer.appendChild(qrImg);
}