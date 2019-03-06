var mysql      = require('mysql');
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
                    alert('creacion realizada!');

                    /**Limpieza de celdas */
                    document.getElementById('numeroMaterial').value = '';
                    document.getElementById('descripcionMaterial').value = '';
                    document.getElementById('metricaMaterial').value = '';
                }
            );
        }
    );
}

function eliminarMateriaPrima(){

}

function actualizarMateriaPrima(){

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
                            alert('creacion realizada!');

                            /**Limpieza de celdas */
                            document.getElementById('numeroProducto').value = '';
                            document.getElementById('descripcionProducto').value = '';
                            document.getElementById('comprador').value = '';
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

}