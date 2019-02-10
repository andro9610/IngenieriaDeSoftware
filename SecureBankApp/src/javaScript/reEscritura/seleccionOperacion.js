function escribirPantallaSeleccion(){
    cambiarNavegacion(1);
    let contenido =document.getElementById('contenido');
    contenido.innerHTML = ''+
        '<h2 id="textoSuperior">¿Que desea hacer?</h2>'+
        '<button type="button" id="botonConsulta" class="botonSeleccion" onclick="validarTarjeta();">Consultar saldo</button>'+
        '<button type="button" id="botonRetiro" class="botonSeleccion" onclick=" validarTarjeta();">Retirar dinero</button>'+
        '<button type="button" id="botonCambioClave" class="botonSeleccion" onclick="validarTarjeta();">Cambiar clave</button>'+
        '<h2 id="textoInferior"></h2>';
}

