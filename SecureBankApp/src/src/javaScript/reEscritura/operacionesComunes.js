function cambiarNavegacion(opcionResaltada){
    let navegacionLateral = document.getElementsByClassName('itemMenu');
    /**cambio de Color de la opcion actual */
    for (var i=0;i<6;i++){
        if(i == opcionResaltada){
            continue;
        }
        navegacionLateral[i].style.color = 'rgb(26, 26, 26)';
    }
}