function escribirPantallaBloqueo(){
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Lo sentimos</h2>'+
    '<img src="../imagenes/tarjeta.png" id="imagenPrincipal">'+
    '<img src="../imagenes/error.png" id="imagenSecundaria">'+
    '<h2 id="textoInferior">Su tarjeta ha sido bloqueada</h2>';
    document.getElementById('textoInferior').style.marginTop = '3%';
}