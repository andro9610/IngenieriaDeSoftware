function agregarBarraInferior(cuerpo){
    cuerpo.innerHTML = '<div id="bannerPrincipal">'+
                            '<h1 id= "tituloPagina">Dataflower</h1>'+
                            '<button type="button" id="botonInicial" onclick="mostrarPantallaOperaciones()">Comenzar</button>'+
                       '</div>';
    let bannerPrincipal = document.getElementById('bannerPrincipal');
    bannerPrincipal.style.backgroundColor = 'rgb(144,0,0)';
    bannerPrincipal.style.marginTop = '47%';
    bannerPrincipal.style.paddingTop = '0.5%';
    bannerPrincipal.style.paddingBottom = '0.2%';    

    let tituloPagina = document.getElementById('tituloPagina');
    tituloPagina.style.position = 'relative';
    tituloPagina.style.fontFamily = 'Century Gothic';
    tituloPagina.style.fontSize = '300%';
    tituloPagina.style.color = 'rgb(223,223,223)';
    tituloPagina.style.marginLeft = '3%';
}

function mostrarPantallaInicio(){
    let cuerpo = document.getElementById('cuerpoDocumento');
    agregarBarraInferior(cuerpo);
}

//window.onload = mostrarPantallaInicio;