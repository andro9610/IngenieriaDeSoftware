function mostrarPantallaEdicionMateriasPrimas(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    cuerpo.innerHTML =  '<div id="cabezeraPantalla">'+
                            '<h1 id="tituloEncabezado">Edicion de materias primas</h1>'+
                            '<button id="botonAtras" onclick="mostrarPantallaOperaciones();"></button>'+
                        '</div>'+
                        '<div id="espacioTrabajo">'+
                            '<div id="fondoTitulo">'+
                                '<h2 class="tituloColumna">id. Material</h2>'+
                                '<h2 class="tituloColumna">Descripcion Material</h2>'+
                                '<h2 class="tituloColumna">Metrica</h2>'+
                            '</div>'+
                            '<input type="text" id="numeroMaterial" class="campoTexto">'+
                            '<input type="text" id="descripcionMaterial" class="campoTexto">'+
                            '<input type="text" id="metricaMaterial" class="campoTexto">'+
                            '<button class="botonAccion" id="botonAgregar"><img id="imagenBoton" src="../imagenes/utileria/comprobado.png"/>Agregar</button><br>'+
                        '</div>';

    let botonAgregar = document.getElementById('botonAgregar');
    botonAgregar.style.marginLeft = '73%';
    botonAgregar.style.marginTop = '6%';
    botonAgregar.style.width = '25%';
    botonAgregar.style.paddingTop = '1%';
    botonAgregar.style.paddingBottom = '1%';

    let imagenBoton = document.getElementById('imagenBoton');
    imagenBoton.style.position = 'float';
    imagenBoton.style.width = '8%';
    imagenBoton.style.marginTop =  '0.5%';

    let numeroMaterial = document.getElementById('numeroMaterial');
    numeroMaterial.style.marginLeft = '2%';
    numeroMaterial.style.marginTop = '6%';
    numeroMaterial.placeholder = "id. Material";

    let descripcionMaterial = document.getElementById('descripcionMaterial');
    descripcionMaterial.style.marginLeft = '24%';
    descripcionMaterial.style.marginTop = '6%';
    descripcionMaterial.style.width = '30%';
    descripcionMaterial.placeholder = 'descripcion del material';

    let metricaMaterial = document.getElementById('metricaMaterial');
    metricaMaterial.style.marginLeft = '55%';
    metricaMaterial.style.marginTop = '6%';
    metricaMaterial.style.width = '15%';
    metricaMaterial.placeholder = 'Unidades';

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
    titulo[2].style.marginLeft = "57%";
}