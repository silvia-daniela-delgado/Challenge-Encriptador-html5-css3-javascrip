// Obtener el elemento de entrada de texto y el elemento de mensaje
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

// Función para encriptar el texto
function btnEncriptar() {
    const encriptado = encriptar(inputTexto.value);
    mensaje.value = encriptado;
    mensaje.style.backgroundImage = "none"; // Elimina la imagen de fondo
    inputTexto.value = ""; // Limpia el campo de entrada de texto
}

function encriptar(textoEncriptado) {
    // Definir un código de reemplazo
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase(); // Convertir el texto a minúsculas

    for (let i = 0; i < codigo.length; i++) {
        if (textoEncriptado.includes(codigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return textoEncriptado;
}

// Función para desencriptar el texto
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

function desencriptar(textoDesencriptado) {
    // Definir el mismo código de reemplazo utilizado para la encriptación
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < codigo.length; i++) {
        if (textoDesencriptado.includes(codigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return textoDesencriptado;
}

// Función para copiar el mensaje al portapapeles
function btnCopiar() {
    mensaje.select(); // Selecciona el texto en el elemento de mensaje
    navigator.clipboard.writeText(mensaje.value); // Copia el texto al portapapeles
    mensaje.value = ""; // Limpia el mensaje
    alert("Texto copiado"); // Muestra una alerta al usuario
}
