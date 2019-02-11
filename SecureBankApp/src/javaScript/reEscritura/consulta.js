function escribirPantallaConsulta(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[3].style.color = 'rgb(223, 223, 223)';

    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Ingrese su clave actual</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="consultarSaldo()">Consultar</button>'+
        '<h2 id="textoInferior"></h2>';
}

function escribirPantallaResultadoConsulta(saldoActual){
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Resultado de consutla</h2>'+
    '<img src="../imagenes/consultaSaldo.png" id="imagenPrincipal">'+
    '<h2 id="textoInferior">Saldo actual $'+saldoActual+'</h2>';

    document.getElementById('textoInferior').style.marginTop = '3%';
}