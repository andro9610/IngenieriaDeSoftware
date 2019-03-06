function estilizarBotonesAccion(botonAccion){
    for(var i=0;i<6;i++){
        botonAccion[i].style.width = '40%';
        botonAccion[i].style.paddingTop = '2%';
    }
}

function escribirMensajePersonalizado(numeroMensaje){
    var textoGuia = document.getElementById('textoGuia');
    switch(numeroMensaje){
        case 1:
            textoGuia.innerHTML = '<p>Realiza una actualizacion del inventario del que disponemos actualmente</p>';
            break;
        case 2:
            textoGuia.innerHTML = 'Realiza una actualizacion de las cantidades de productos que salen de la empresa';
            break;
        case 3:
            textoGuia.innerHTML = 'Hace una consulta de los materiales de produccion con los que se cuenta actualmente';
            break;
        case 4:
            textoGuia.innerHTML = 'Hace una consulta de los productos que han salido de la empresa hasta el momento';
            break;
        case 5:
            textoGuia.innerHTML = 'Permite agregar, quitar o editar productos a las existencias de la empresa';
            break;
        case 6:
            textoGuia.innerHTML = 'Permite agregar, quitar o editar materias primas del inventario de la empresa';
            break;
        case 7:
            textoGuia.innerHTML = 'Pase sobre una opcion para ver los detalles';
            break;
    }
}

function mostrarPantallaOperaciones(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    cuerpo.innerHTML =  '<div id="cabezeraPantalla">'+
                            '<h1 id="tituloEncabezado">Inicio</h1>'+
                            '<button id="botonAtras" onclick="mostrarPantallaInicio();"></button>'+
                        '</div>'+
                        '<div id="espacioTrabajo">'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(1);" onclick="mostrarEdicionInventarios();">Actualizar existencias</button><br>'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(2);" onclick="mostrarEdicionProduccion();">Actualizar exportaciones</button><br>'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(3);" onclick="mostrarConsultaMateriasPrimas()">Ver inventario</button><br>'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(4);" onclick="mostrarConsultaProduccion()">Ver exportaciones</button><br>'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(5);" onclick="mostrarPantallaEdicionProductos();">Editar productos</button><br>'+
                            '<button class="botonAccion" onmouseout="escribirMensajePersonalizado(7)" onmouseover="escribirMensajePersonalizado(6);" onclick="mostrarPantallaEdicionMateriasPrimas();">Editar materias primas</button><br>'+
                            '<div id="textoGuia"><p>Pase sobre una opcion para ver los detalles</p></div>'+
                        '</div>';
    
    let botonAccion = document.getElementsByClassName('botonAccion');
    botonAccion[0].style.marginTop = '9%';
    estilizarBotonesAccion(botonAccion);
}