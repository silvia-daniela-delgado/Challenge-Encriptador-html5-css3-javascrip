const inputTexto = document.querySelector(".input-texto")

const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const encriptado = encriptar(inputTexto.value); 
    mensaje.value = encriptado;
    mensaje.style.backgroundImage = "none"; 
    inputTexto.value = "" 
}
function encriptar(textoEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase(); /* pasar el texto a minúscula */ 

    for (let i = 0; i < codigo.length; i++){
        if (textoEncriptado.includes(codigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]) 
            
        } 
    }
    return textoEncriptado;
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}
function desencriptar(textoDesencriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i < codigo.length; i++) {
        if(textoDesencriptado.includes(codigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return textoDesencriptado;
}
function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value); 
    mensaje.value = "";
    alert("Texto copiado")
}