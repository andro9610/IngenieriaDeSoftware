function escribirPantallaCantidadRetiro(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[2].style.color = 'rgb(223, 223, 223)';

    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">Ingrese la cantidad que desea retirar</h2>'+
        '<input type="text" id="cantidadRetiro" autofocus= "true" maxlength="10" minlength="10"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="escribirPantallaPedirClave();">Retirar</button>'+
        '<h2 id="textoInferior">Ingrese su numero de tarjeta para continuar</h2>';
}

function escribirPantallaPedirClave(){
    sessionStorage.setItem('cantidadRetiro',document.getElementById('cantidadRetiro').value);
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Ingrese su clave actual</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="actualizarSaldo()">Continuar</button>'+
        '<h2 id="textoInferior"></h2>';
}