let textArea = document.querySelector(".texto-encrip");
let mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    let h6Element = document.getElementById("miH6");
    // Verifica si el elemento h6 existe antes de intentar eliminarlo
    if (h6Element) {
        // Obtén el padre del elemento h6 y utiliza removeChild para quitarlo
        let padre = h6Element.parentNode;
        padre.removeChild(h6Element);
    } else {
        console.log("El elemento h6 no existe en el documento.");
    }
}

function encriptar(mensajeEncriptado) {
    // Definición de una matriz que contiene pares de letras a encriptar y sus respectivos códigos
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    // Convertir el mensaje encriptado a minúsculas para hacer la comparación de manera insensible a mayúsculas/minúsculas
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    // Iterar sobre cada par de letras y códigos en la matriz
    for (let i = 0; i < matrizCodigo.length; i++) {
        // Verificar si el mensajeEncriptado contiene la letra actual en la matriz
        if (mensajeEncriptado.includes(matrizCodigo[i][0])) {
            // Reemplazar todas las ocurrencias de la letra por su respectivo código en el mensajeEncriptado
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    // Devolver el mensajeEncriptado después de todas las sustituciones
    return mensajeEncriptado;
}



//****aqui es para desencriptar****


function btnDesencriptar(){
    let textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    let h6Element = document.getElementById("miH6");
    // Verifica si el elemento h6 existe antes de intentar eliminarlo
    if (h6Element) {
        // Obtén el padre del elemento h6 y utiliza removeChild para quitarlo
        let padre = h6Element.parentNode;
        padre.removeChild(h6Element);
    } else {
        console.log("El elemento h6 no existe en el documento.");
    }
}

function desencriptar(mensajeDesencriptado) {
    // Definición de una matriz que contiene pares de letras a encriptar y sus respectivos códigos
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensajeDesencriptado.includes(matrizCodigo[i][1])) {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return mensajeDesencriptado;
}


function copiar() {
    // Obtener el contenido del mensaje
    let textoACopiar = mensaje.value.trim();  // Trim para eliminar espacios en blanco al inicio y al final

    // Verificar si el contenido del mensaje no está vacío
    if (textoACopiar !== '') {
        // Verificar si el navegador admite la API del portapapeles
        if (navigator.clipboard) {
            // Escribir el texto en el portapapeles
            navigator.clipboard.writeText(textoACopiar)
                .then(() => {
                    alert('Texto copiado al portapapeles:');
                    // Limpiar el contenido del textarea después de copiar
                    mensaje.value = '';
                })
                .catch(error => {
                    console.error('Error al copiar al portapapeles:', error);
                });
        }
    } else {
        // No mostrar alerta si el mensaje está vacío
        console.log('El mensaje está vacío. No hay nada para copiar.');
    }
}


