function mostrarConsultaMateriasPrimas(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    cuerpo.innerHTML =  '<div id="cabezeraPantalla">'+
                            '<h1 id="tituloEncabezado">Consulta de materias primas</h1>'+
                            '<button id="botonAtras" onclick="mostrarPantallaOperaciones();"></button>'+
                        '</div>'+
                        '<div id="espacioTrabajo">'+
                            '<div id="fondoTitulo">'+
                                '<h2 class="tituloColumna">id. Material</h2>'+
                                '<h2 class="tituloColumna">Descripcion Material</h2>'+
                                '<h2 class="tituloColumna">Metrica</h2>'+
                                '<h2 class="tituloColumna">Unidades</h2>'+
                            '</div>'+
                            '<div id="resultadoConsulta"></div>'+
                        '</div>';


    document.getElementById('tituloEncabezado').onload = consultarInventario();
    let titulo = document.getElementsByClassName('tituloColumna');
    titulo[0].style.position = 'fixed';
    titulo[0].style.fontSize = '250%';
    titulo[0].style.zIndex = "1";
    titulo[0].style.marginLeft = "5%";

    titulo[1].style.position = 'fixed';
    titulo[1].style.fontSize = '250%';
    titulo[1].style.zIndex = "1";
    titulo[1].style.marginLeft = "26%";

    titulo[2].style.position = 'fixed';
    titulo[2].style.fontSize = '250%';
    titulo[2].style.zIndex = "1";
    titulo[2].style.marginLeft = "60%";

    titulo[3].style.position = 'fixed';
    titulo[3].style.fontSize = '250%';
    titulo[3].style.zIndex = "1";
    titulo[3].style.marginLeft = "77%";
}
