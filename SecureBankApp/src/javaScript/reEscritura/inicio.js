function cambiarNavegacion(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    /**cambio de Color de la opcion actual */
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[2].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[3].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[4].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[5].style.color = 'rgb(26, 26, 26)';
}

function cambiarContenedor(){
    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">Bienvenido</h2>'+
        '<input type="text" id="campoNumero" autofocus= "true" maxlength="10" minlength="10"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="validarTarjeta(document.getElementById("campoNumero").value)">Ingresar</button>'+
        '<h2 id="textoInferior">Ingrese su numero de tarjeta para continuar</h2>';
}

function escribirPantalla(){
    cambiarNavegacion();
    cambiarContenedor();
}
window.onload = escribirPantalla;