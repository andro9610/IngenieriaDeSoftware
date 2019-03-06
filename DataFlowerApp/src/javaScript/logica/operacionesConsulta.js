var mysql      = require('mysql');
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M4h07obd',
    port: 3306,
    database : 'flowerdatabase'
});

function consultarProduccion(){
    let resultadoConsulta = document.getElementById('resultadoConsulta');
    var resultadoConsultaCompradores = document.getElementById('resultadoConsultaCompradores');
    resultadoConsultaCompradores.style.position = 'absolute';
    resultadoConsultaCompradores.style.marginTop = '-2%';
    resultadoConsultaCompradores.style.padingTop = '-2%';
    resultadoConsultaCompradores.style.marginLeft = '10%';
    /**Limpiar antes de escribir */
    resultadoConsulta.innerHTML = '';
    resultadoConsultaCompradores.innerHTML = '';
    conexion.connect(
        function(err){
            conexion.query(
                'SELECT IDPRODUCTO,DESCRIPCIONPRODUCTO,CANTIDAD FROM PRODUCTOS;',
                function(err,rows,fields){
                    sessionStorage.setItem('cantidadElementos',rows.length);
                    for(var contador = 0; contador < rows.length;contador++){
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<p class="idProducto" id="IdProductoBD'+contador+'">'+rows[contador].IDPRODUCTO+'<p><br>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<p class="descripcionProducto" id="descripcionProductoBD'+contador+'">'+rows[contador].DESCRIPCIONPRODUCTO+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<p class="cantidadProducto" id="cantidadProductoBD'+contador+'">'+rows[contador].CANTIDAD+'<p><br>';
                    }
                    conexion.query(
                        'SELECT IDCOMPRADOR FROM COMPRADOR',
                        function(err,rows,fields){
                            let idComprador = document.getElementsByClassName('idComprador');
                            var rows2 = rows;
                            for(var contador = 0; contador < rows2.length;contador++){
                                resultadoConsultaCompradores.innerHTML = resultadoConsultaCompradores.innerHTML+'<br><p class="idComprador" id="IdCompradorBD'+contador+'">'+rows2[contador].IDCOMPRADOR+'<p>'; 
                            }
                            var idProducto = document.getElementsByClassName('idProducto');
                            var descripcionProducto = document.getElementsByClassName('descripcionProducto');
                            var cantidadProducto = document.getElementsByClassName('cantidadProducto');
                
                            for(let contador = 0; contador < sessionStorage.getItem('cantidadElementos');contador++){
                
                                idProducto[contador].style.position = 'absolute';
                                idProducto[contador].style.marginLeft = '8%';
                                idProducto[contador].style.marginTop = '7%';
                                idProducto[contador].style.marginBottom = '-15%';
                
                                descripcionProducto[contador].style.position = 'absolute';
                                descripcionProducto[contador].style.marginLeft = '35%';
                                descripcionProducto[contador].style.marginTop = '3.5%';
                
                                cantidadProducto[contador].style.position = 'absolute';
                                cantidadProducto[contador].style.marginLeft = '90%';
                                cantidadProducto[contador].style.marginTop = '4%';
                            }
                        }
                    );
                }
            );
        }
    );
}

function consultarInventario(){
    let resultadoConsulta = document.getElementById('resultadoConsulta');
    /**Limpiar antes de escribir */
    resultadoConsulta.innerHTML = '';
    conexion.connect(
        function(err){
            conexion.query(
                'SELECT IDMATERIAL,DESCRIPCIONMATERIAL,METRICA,CANTIDAD FROM MATERIALES;',
                function(err,rows,fields){
                    sessionStorage.setItem('cantidadElementos',rows.length);
                    for(var contador = 0; contador < rows.length;contador++){
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="idMaterial" id="IdMaterialBD'+contador+'">'+rows[contador].IDMATERIAL+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="descripcionMaterial" id="descripcionMaterialBD'+contador+'">'+rows[contador].DESCRIPCIONMATERIAL+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="metricaMaterial" id="metricaMaterialBD'+contador+'">'+rows[contador].METRICA+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="cantidadMaterial" id="cantidadMaterialBD'+contador+'">'+rows[contador].CANTIDAD+'<p>';
                    }
                    let idMaterial = document.getElementsByClassName('idMaterial');
                    let descripcionMaterial = document.getElementsByClassName('descripcionMaterial');
                    let metricaMaterial = document.getElementsByClassName('metricaMaterial');
                    let cantidadMaterial = document.getElementsByClassName('cantidadMaterial');
                    for(let contador = 0; contador < sessionStorage.getItem('cantidadElementos');contador++){
                        idMaterial[contador].style.marginTop = '6%';
                        idMaterial[contador].style.marginBottom = '-6%';
                        descripcionMaterial[contador].style.marginTop = '2%';
                        metricaMaterial[contador].style.marginLeft = '62%';
                        metricaMaterial[contador].style.marginTop = '0%';
                        cantidadMaterial[contador].style.marginLeft = '83%';
                        cantidadMaterial[contador].style.position = 'absolute';
                        cantidadMaterial[contador].style.marginTop = '-0%';
                    }
                }
            );
        }
    );
}