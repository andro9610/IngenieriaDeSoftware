/**
 * Codigos de error:
 * 1 - Clave incorrecta
 * 2 - Fondos insuficientes
 * 3 - tope diario excedido
 */

function escribirPantallaError(numeroError){
    let contenido = document.getElementById('contenido');
    if(numeroError == 1){
        contenido.innerHTML = '<h2 id="textoSuperior">¡Error!</h2>'+
        '<img src="../imagenes/key.png" id="imagenPrincipal">'+
        '<img src="../imagenes/error.png" id="imagenSecundaria">'+
        '<h2 id="textoInferior">Clave incorrecta</h2>';
        document.getElementById('textoInferior').style.marginTop = '3%';
    }

}