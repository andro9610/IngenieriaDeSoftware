function escribirPantallaInicial(){
    cambiarNavegacion(0);
    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">Bienvenido</h2>'+
        '<input type="text" id="campoNumero" autofocus= "true" maxlength="10" minlength="10"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="validarTarjeta();">Ingresar</button>'+
        '<h2 id="textoInferior">Ingrese su numero de tarjeta para continuar</h2>';
}
window.onload = escribirPantallaInicial;