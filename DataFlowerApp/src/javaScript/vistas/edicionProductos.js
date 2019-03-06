function mostrarPantallaEdicionProductos(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    cuerpo.innerHTML =  '<div id="cabezeraPantalla">'+
                            '<h1 id="tituloEncabezado">Edicion de productos</h1>'+
                            '<button id="botonAtras" onclick="mostrarPantallaOperaciones();"></button>'+
                        '</div>'+
                        '<div id="espacioTrabajo">'+
                            '<div id="fondoTitulo">'+
                                '<h2 class="tituloColumna">id. Producto</h2>'+
                                '<h2 class="tituloColumna">Descripcion producto</h2>'+
                            '</div>'+
                            '<input type="text" id="numeroProducto" class="campoTexto">'+
                            '<input type="text" id="descripcionProducto" class="campoTexto">'+
                            '<button class="botonAccion" id="botonAgregar"><img id="imagenBoton" src="../imagenes/utileria/comprobado.png"/>Agregar</button><br>'+
                        '</div>';              

    let botonAgregar = document.getElementById('botonAgregar');
    botonAgregar.style.marginLeft = '68%';
    botonAgregar.style.marginTop = '6%';
    botonAgregar.style.width = '30%';
    botonAgregar.style.paddingTop = '0.9%';
    botonAgregar.style.paddingBottom = '0.9%';


    let imagenBoton = document.getElementById('imagenBoton');
    imagenBoton.style.position = 'float';
    imagenBoton.style.width = '8%';
    imagenBoton.style.marginTop =  '0.5%';

    let numeroProducto = document.getElementById('numeroProducto');
    numeroProducto.style.marginLeft = '2%';
    numeroProducto.style.marginTop = '6%';
    numeroProducto.placeholder = "id. Producto";

    let descripcionProducto = document.getElementById('descripcionProducto');
    descripcionProducto.style.marginLeft = '24%';
    descripcionProducto.style.marginTop = '6%';
    descripcionProducto.style.width = '43%';
    descripcionProducto.placeholder = 'descripcion del producto';

    let titulo = document.getElementsByClassName('tituloColumna');
    titulo[0].style.position = 'fixed';
    titulo[0].style.fontSize = '250%';
    titulo[0].style.zIndex = "1";
    titulo[0].style.marginLeft = "5%";
    titulo[1].style.position = 'fixed';
    titulo[1].style.fontSize = '250%';
    titulo[1].style.zIndex = "1";
    titulo[1].style.marginLeft = "32%";
}
