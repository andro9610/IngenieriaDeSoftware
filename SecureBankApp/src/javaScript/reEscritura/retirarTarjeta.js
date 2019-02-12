function escribirPantallaRetirarTarjeta(){
    let contenido =document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">             </h2>'+
    '<img src="../imagenes/retirarTarjeta.png" id="imagenPrincipal">'+
    '<h2 id="textoInferior">Por favor, retire su tarjeta</h2>';
    document.getElementById('textoInferior').style.marginTop = '3%';
}

