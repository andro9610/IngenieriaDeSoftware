var mysql      = require('mysql');
var mensajePopUp = require('sweetalert');
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M4h07obd',
    port: 3306,
    database : 'flowerdatabase'
});


/** Operaciones concernientes a las Materias primas */
function crearMateriaPrima(){
    /**Recoleccion de datos */
    sessionStorage.setItem('IdMaterial',document.getElementById('numeroMaterial').value);
    sessionStorage.setItem('descripcionMaterial',document.getElementById('descripcionMaterial').value);
    sessionStorage.setItem('metricaMaterial',document.getElementById('metricaMaterial').value);
    /**Asignacion a variables para obtener codigo legible */
    let IdMaterial = sessionStorage.getItem('IdMaterial');
    let descripcionMaterial = sessionStorage.getItem('descripcionMaterial');
    let metricaMaterial = sessionStorage.getItem('metricaMaterial');
    /**Operacion de base de datos */
    conexion.connect(
        function(err){
            conexion.query(
                'INSERT INTO MATERIALES VALUES ('+IdMaterial+',"'+descripcionMaterial+'",0,"'+metricaMaterial+'")',
                function(err,rows,fields){
                    swal({
                        title: "Resultado de operacion",
                        text: "Creacion Finalizada",
                        icon: "success",
                        button: "Ok",
                      });

                    /**Limpieza de celdas */
                    document.getElementById('numeroMaterial').value = '';
                    document.getElementById('descripcionMaterial').value = '';
                    document.getElementById('metricaMaterial').value = '';
                    actualizarMateriaPrima();
                }
            );
        }
    );
}

function eliminarMateriaPrima(){

}

function actualizarMateriaPrima(){
    let resultadoConsulta = document.getElementById('resultadoConsulta');
    /**Limpiar antes de escribir */
    resultadoConsulta.innerHTML = '';
    conexion.connect(
        function(err){
            conexion.query(
                'SELECT IDMATERIAL,DESCRIPCIONMATERIAL,METRICA FROM MATERIALES;',
                function(err,rows,fields){
                    for(var contador = 0; contador < rows.length;contador++){
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="idMaterial" id="IdMaterialBD'+contador+'">'+rows[contador].IDMATERIAL+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="descripcionMaterial" id="descripcionMaterialBD'+contador+'">'+rows[contador].DESCRIPCIONMATERIAL+'<p>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<br><p class="metricaMaterial" id="IdMaterialBD'+contador+'">'+rows[contador].METRICA+'<p>';
                    }
                }
            );
        }
    );
}

/**Operaciones concernientes a los productos */
function crearProducto(){
    /**Recoleccion de datos */
    sessionStorage.setItem('IdProducto',document.getElementById('numeroProducto').value);
    sessionStorage.setItem('descripcionProducto',document.getElementById('descripcionProducto').value);
    sessionStorage.setItem('IdComprador',document.getElementById('comprador').value);
    /**Asignacion a variables para obtener codigo legible */
    let IdProducto = sessionStorage.getItem('IdProducto');
    let descripcionProducto = sessionStorage.getItem('descripcionProducto');
    let IdComprador = sessionStorage.getItem('IdComprador');
    /**Operacion de base de datos */
    conexion.connect(
        function(err){
            conexion.query(
                'INSERT INTO PRODUCTOS VALUES ('+IdProducto+',"'+descripcionProducto+'",0)',
                function(err,rows,fields){
                    conexion.query(
                        'INSERT INTO COMPRADOR VALUES('+IdComprador+',"Sin Descripcion")',
                        function(err,rows,fields){
                            swal({
                                title: "Resultado de operacion",
                                text: "Creacion Finalizada",
                                icon: "success",
                                button: "Ok",
                              });

                            /**Limpieza de celdas */
                            document.getElementById('numeroProducto').value = '';
                            document.getElementById('descripcionProducto').value = '';
                            document.getElementById('comprador').value = '';
                            actualizarProducto();
                        }
                    );
                }
            );
        }
    );
}

function eliminarProducto(){

}

function actualizarProducto(){
    let resultadoConsulta = document.getElementById('resultadoConsulta');
    let resultadoConsultaCompradores = document.getElementById('resultadoConsultaCompradores');
    /**Limpiar antes de escribir */
    resultadoConsulta.innerHTML = '';
    resultadoConsultaCompradores.innerHTML = '';
    conexion.connect(
        function(err){
            conexion.query(
                'SELECT IDPRODUCTO,DESCRIPCIONPRODUCTO FROM PRODUCTOS;',
                function(err,rows,fields){
                    for(var contador = 0; contador < rows.length;contador++){
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<p class="idProducto" id="IdProductoBD'+contador+'">'+rows[contador].IDPRODUCTO+'<p><br>';
                        resultadoConsulta.innerHTML = resultadoConsulta.innerHTML+'<p class="descripcionProducto" id="descripcionProductoBD'+contador+'">'+rows[contador].DESCRIPCIONPRODUCTO+'<p><br>';
                    }
                }
            );
            conexion.query(
                'SELECT IDCOMPRADOR FROM COMPRADOR',
                function(err,rows,fields){
                    var rows2 = rows;
                    for(var contador = 0; contador < rows2.length;contador++){
                        resultadoConsultaCompradores.innerHTML = resultadoConsultaCompradores.innerHTML+'<br><p class="idComprador" id="IdCompradorBD'+contador+'">'+rows2[contador].IDCOMPRADOR+'<p>';
                    }
                }
            ); 
        }
    );
}