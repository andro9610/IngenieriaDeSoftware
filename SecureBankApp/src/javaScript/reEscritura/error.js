/**
 * Codigos de error:
 * 1 - Clave incorrecta
 * 2 - Fondos insuficientes
 * 3 - tope diario excedido
 * 4 - Cajero sin fondos
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

    if(numeroError == 2){
        contenido.innerHTML = '<h2 id="textoSuperior">¡Error!</h2>'+
        '<img src="../imagenes/billetera.png" id="imagenPrincipal">'+
        '<img src="../imagenes/error.png" id="imagenSecundaria">'+
        '<h2 id="textoInferior">No posee Fondos suficientes</h2>';
        document.getElementById('textoInferior').style.marginTop = '3%';
    }

    if(numeroError == 3){
        contenido.innerHTML = '<h2 id="textoSuperior">¡Error!</h2>'+
        '<img src="../imagenes/monedas.png" id="imagenPrincipal">'+
        '<img src="../imagenes/error.png" id="imagenSecundaria">'+
        '<h2 id="textoInferior">Ha excedido el tope diario</h2>';
        document.getElementById('textoInferior').style.marginTop = '3%';
    }

    if(numeroError == 4){
        contenido.innerHTML = '<h2 id="textoSuperior">¡Error!</h2>'+
        '<img src="../imagenes/cajaFuerte.png" id="imagenPrincipal">'+
        '<img src="../imagenes/error.png" id="imagenSecundaria">'+
        '<h2 id="textoInferior">El cajero no tiene fondos</h2>';
        document.getElementById('textoInferior').style.marginTop = '3%';
    }

}