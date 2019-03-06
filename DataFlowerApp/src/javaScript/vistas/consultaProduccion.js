function mostrarConsultaProduccion(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    cuerpo.innerHTML =  '<div id="cabezeraPantalla">'+
                            '<h1 id="tituloEncabezado">Consulta de produccion</h1>'+
                            '<button id="botonAtras" onclick="mostrarPantallaOperaciones();"></button>'+
                        '</div>'+
                        '<div id="espacioTrabajo">'+
                            '<div id="fondoTitulo">'+
                                '<h2 class="tituloColumna">id. Producto</h2>'+
                                '<h2 class="tituloColumna">Descripcion producto</h2>'+
                                '<h2 class="tituloColumna">Cantidad</h2>'+
                            '</div>'+
                        '</div>';   

    let titulo = document.getElementsByClassName('tituloColumna');
    titulo[0].style.position = 'fixed';
    titulo[0].style.fontSize = '250%';
    titulo[0].style.zIndex = "1";
    titulo[0].style.marginLeft = "5%";

    titulo[1].style.position = 'fixed';
    titulo[1].style.fontSize = '250%';
    titulo[1].style.zIndex = "1";
    titulo[1].style.marginLeft = "34%";

    titulo[2].style.position = 'fixed';
    titulo[2].style.fontSize = '250%';
    titulo[2].style.zIndex = "1";
    titulo[2].style.marginLeft = "75%";
}

window.onload = mostrarConsultaProduccion;