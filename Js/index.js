const d = document;
const textArea = d.querySelector(".text-area"),
mensaje = d.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(texto){
    let matrizCo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCo.length; i++){
        if(texto.includes(matrizCo[i][0])){
            texto = texto.replaceAll(matrizCo[i][0], matrizCo[i][1]);
        }
    }
    return texto;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(textoDesencriptado){
    let matrizCo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCo.length; i++){
        if(textoDesencriptado.includes(matrizCo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCo[i][1], matrizCo[i][0]);
        }
    }
    return textoDesencriptado;
}

function btnCopiar(){
    let textoMensaje = d.querySelector(".mensaje");
    textoMensaje.select();
    textoMensaje.setSelectionRange(0, 99999);
    d.execCommand('copy');
}