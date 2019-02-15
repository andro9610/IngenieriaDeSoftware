function escribirPantallaSeleccion(){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    navegacionLateral[0].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[1].style.color = 'rgb(223, 223, 223)';

    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">¿Que desea hacer?</h2>'+
        '<button type="button" id="botonConsulta" class="botonSeleccion" onclick="escribirPantallaConsulta();">Consultar saldo</button>'+
        '<button type="button" id="botonRetiro" class="botonSeleccion" onclick="escribirPantallaCantidadRetiro();">Retirar dinero</button>'+
        '<button type="button" id="botonCambioClave" class="botonSeleccion" onclick="escribirPantallaCambioClave();">Cambiar clave</button>'+
        '<button type="button" id="botonIngreso" class="botonSeleccion" onclick="escribirPantallaCantidadIngreso();">Ingresar dinero</button>'+
        '<h2 id="textoInferior"></h2>';
    
    let botonConsulta = document.getElementById('botonConsulta');
    let botonRetiro = document.getElementById('botonRetiro');
    let botonCambioClave = document.getElementById('botonCambioClave');
    let botonIngreso = document.getElementById('botonIngreso');

    botonConsulta.style.backgroundImage = "url('../imagenes/consultaSaldo.png')";
    botonRetiro.style.backgroundImage = "url('../imagenes/retirarDinero.png')";
    botonCambioClave.style.backgroundImage = "url('../imagenes/key.png')";
    botonIngreso.style.backgroundImage = "url('../imagenes/ingresarMoneda.png')";
}

