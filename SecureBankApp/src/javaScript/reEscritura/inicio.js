var contenido = document.getElementById('contenido');
var navegacionLateral = document.getElementsByClassName('itemMenu');

function cambiarNavegacion(){
    /**cambio de Color de la opcion actual */
    navegacionLateral[1].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[2].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[3].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[4].style.color = 'rgb(26, 26, 26)';
    navegacionLateral[5].style.color = 'rgb(26, 26, 26)';

    /**Añadido de las opciones de inicio */
}

window.onload = cambiarNavegacion;