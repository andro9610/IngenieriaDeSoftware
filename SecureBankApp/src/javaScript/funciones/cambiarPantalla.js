/**Funciones extra para fines esteticos */
function haciaFinOperacion(event) {
    var codigo = event.which || event.keyCode;
    if(codigo === 13){
      escribirPantallaFinOperacion();
    }     
}

function haciaInicio(event) {
    var codigo = event.which || event.keyCode;
    if(codigo === 13){
        escribirPantallaInicial();
    }     
}

function continuar(event) {
    var codigo = event.which || event.keyCode;
    while(codigo != 13){
        escribirPantallaRetirarTarjeta();
    }
}

