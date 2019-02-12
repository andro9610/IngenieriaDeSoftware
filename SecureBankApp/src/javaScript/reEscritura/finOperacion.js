function escribirPantallaFinOperacion(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    for (let i=0; i<6; i++){
        navegacionLateral[i].style.color = 'rgb(26, 26, 26)';
    }
    navegacionLateral[5].style.color = 'rgb(223, 223, 223)';

    let contenido =document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Fin de operacion</h2>'+
    '<img src="../imagenes/banco.png" id="imagenPrincipal">'+
    '<h2 id="textoInferior">Gracias por usar nuestro servicio</h2>';
    document.getElementById('textoInferior').style.marginTop = '3%';

}