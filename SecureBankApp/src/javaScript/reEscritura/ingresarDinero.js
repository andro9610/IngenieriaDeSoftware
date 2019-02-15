function escribirPantallaCantidadIngreso(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[6].style.color = 'rgb(223, 223, 223)';

    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">Ingrese la cantidad que desea ingresar</h2>'+
        '<input type="text" id="cantidadRetiro" autofocus= "true" maxlength="10" minlength="10"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="escribirPantallaPedirClave();">Cargar saldo</button>'+
        '<h2 id="textoInferior"></h2>';
}

function escribirPantallaPedirClave(){
    sessionStorage.setItem('cantidadRetiro',document.getElementById('cantidadRetiro').value);
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Ingrese su clave actual</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="ingresarDinero()">Continuar</button>'+
        '<h2 id="textoInferior"></h2>';
}

function escribirResultadoIngreso(nuevoSaldo){
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Transaccion exitosa</h2>'+
    '<img src="../imagenes/billetera.png" id="imagenPrincipal">'+
    '<img src="../imagenes/exito.png" id="imagenSecundaria">'+
    '<h2 id="textoInferior">Nuevo Saldo $'+nuevoSaldo+'</h2>';
    document.getElementById('textoInferior').style.marginTop = '3%';
}