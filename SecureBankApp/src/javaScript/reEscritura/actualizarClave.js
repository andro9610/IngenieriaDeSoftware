function escribirPantallaCambioClave(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[4].style.color = 'rgb(223, 223, 223)';

    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Ingrese su clave actual</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="escribirPantallaNuevaClave()">Consultar</button>'+
        '<h2 id="textoInferior"></h2>';
}

function escribirPantallaNuevaClave(){
    sessionStorage.setItem('claveIngresada',document.getElementById('campoClave').value);
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Ingrese su nueva clave</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="escribirPantallaConfirmacion()">Consultar</button>'+
        '<h2 id="textoInferior"></h2>';
}

function escribirPantallaConfirmacion(){
    sessionStorage.setItem('nuevaClave',document.getElementById('campoClave').value);
    let contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2 id="textoSuperior">Confirme su nueva clave</h2>'+
        '<input type="password" id="campoClave" autofocus= "true" maxlength="4" minlength="4"/>'+'<br>'+
        '<button type="button" id="botonSiguiente" onclick="actualizarClave()">Consultar</button>'+
        '<h2 id="textoInferior"></h2>'; 
}