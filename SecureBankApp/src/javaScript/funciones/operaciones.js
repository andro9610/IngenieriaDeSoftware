/**Importar y configurar mysql, para conectar la base de datos */
var mysql      = require('mysql');
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M4h07obd',
    port: 3306,
    database : 'securebankdatabase'
});

var sesionLocal = require('sessionStorage');

/** Operaciones que permiten las operaciones del cajero */
//LISTO
function actualizarClave(){
  sessionStorage.setItem('nuevaClaveConfirmada',document.getElementById('campoClave').value);
  let numeroTarjeta = sessionStorage.getItem('numeroTarjeta');
  let claveIngresada = sessionStorage.getItem('claveIngresada');
  let nuevaClave = sessionStorage.getItem('nuevaClave');
  let nuevaClaveConfirmada = sessionStorage.getItem('nuevaClaveConfirmada');
  let intentos;

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT INTENTOS,CLAVE FROM CLIENTES WHERE NTARJETA ='+numeroTarjeta,
        function(err,rows,fields){
          if(claveIngresada != rows[0].CLAVE){
            intentos = rows[0].INTENTOS - 1;
            conexion.query('UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
            escribirPantallaError(1);
            if(intentos == 0){
              bloquearTarjeta(numeroTarjeta);
            }
          }

          if(nuevaClave != nuevaClaveConfirmada){
            escribirPantallaError(1);
          }

          if(claveIngresada == rows[0].CLAVE && nuevaClave == nuevaClaveConfirmada){
            conexion.query('UPDATE CLIENTES SET INTENTOS = 3,CLAVE ='+nuevaClave+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
            escribirPantallaClaveActualizada();
          }   
        }
      );
    }
  );
}

function retirarDinero(){

  sessionStorage.setItem('claveIngresada',document.getElementById('campoClave').value);
  let saldoCliente,saldoCajero,intentos,topeActual;
  let numeroTarjeta = sessionStorage.getItem('numeroTarjeta');
  let cantidadRetiro = sessionStorage.getItem('cantidadRetiro');
  let claveIngresada = sessionStorage.getItem('claveIngresada');

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT SALDO,CLAVE,INTENTOS,TOPEDIARIO FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,rows,fields){
          if(rows[0].CLAVE == claveIngresada){
            if(cantidadRetiro <= rows[0].SALDO){
              topeActual = parseInt(cantidadRetiro) + parseInt(rows[0].TOPEDIARIO);
              if(topeActual < 2500000){
                saldoCliente = parseInt(rows[0].SALDO) - parseInt(cantidadRetiro);
                conexion.query(
                  'SELECT SALDOCAJERO FROM CAJERO WHERE IDCAJERO = 236211223',
                  function(err,rows,fields){
                    if(cantidadRetiro < rows[0].SALDOCAJERO){
                      saldoCajero = parseInt(rows[0].SALDOCAJERO) - parseInt(cantidadRetiro);
                      conexion.query('UPDATE CLIENTES SET SALDO ='+saldoCliente+', INTENTOS = 3, TOPEDIARIO ='+topeActual+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
                      conexion.query('UPDATE CAJERO SET SALDOCAJERO = '+saldoCajero,function(err){});
                      escribirResultadoRetiro(saldoCliente);
                    }else{
                      escribirPantallaError(4);
                    }
                  }
                );
              }else{
                escribirPantallaError(3);
              }
            }else{
              escribirPantallaError(2);
            }
          }else{
            intentos = rows[0].INTENTOS - 1;
            conexion.query('UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
            if(intentos == 0){
              bloquearTarjeta(numeroTarjeta);
            }else{
              escribirPantallaError(1);
            }
          }
        }
      );
    }
  );

}

function ingresarDinero(){

  sessionStorage.setItem('claveIngresada',document.getElementById('campoClave').value);
  let saldoCliente,claveCliente,saldoCajero,intentos;
  let numeroTarjeta = sessionStorage.getItem('numeroTarjeta');
  let cantidadIngreso = sessionStorage.getItem('cantidadIngreso');
  let claveIngresada = sessionStorage.getItem('claveIngresada');

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT SALDO,CLAVE,INTENTOS FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,rows,fields){
          if(rows[0].CLAVE == claveIngresada){
            saldoCliente = parseInt(rows[0].SALDO) + parseInt(cantidadIngreso);
            conexion.query('UPDATE CLIENTES SET SALDO = '+saldoCliente+', INTENTOS = 3 WHERE NTARJETA = '+numeroTarjeta,function(err){});
            escribirResultadoIngreso(saldoCliente);
            conexion.query(
              'SELECT SALDOCAJERO FROM CAJERO WHERE IDCAJERO = 236211223',
              function(err,rows,fields){
                saldoCajero = parseInt(rows[0].SALDOCAJERO) + parseInt(cantidadIngreso);
                conexion.query('UPDATE CAJERO SET SALDOCAJERO ='+saldoCajero,function(err){alert(saldoCajero);});
              }
            );
          }else{
            intentos = rows[0].INTENTOS - 1;
            conexion.query('UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
            if(intentos == 0){
              bloquearTarjeta(numeroTarjeta);
            }else{
              escribirPantallaError(1);
            }
          }
        }
      );
    }
  );
}

//lISTO
function bloquearTarjeta(numeroTarjeta){
  conexion.connect(
    function(err){
      conexion.query(
        "UPDATE CLIENTES SET BLOQUEO = 1 WHERE NTARJETA = "+numeroTarjeta,
        function(err){
          escribirPantallaBloqueo();//Imprimir pantalla de tarjeta bloqueada
        }
      );
    }
  );  
}

//LISTO
function consultarSaldo(){
  sessionStorage.setItem('claveIngresada',document.getElementById('campoClave').value);
  let claveIngresada = sessionStorage.getItem('claveIngresada');
  let numeroTarjeta = sessionStorage.getItem('numeroTarjeta');
  let intentos;
  alert
  conexion.connect(
    function(err){
      conexion.query(
        'SELECT SALDO,INTENTOS,CLAVE FROM CLIENTES WHERE NTARJETA ='+numeroTarjeta,
        function(err,rows,fields){
          if(rows[0].CLAVE == claveIngresada){
            conexion.query('UPDATE CLIENTES SET INTENTOS=3 WHERE NTARJETA = '+numeroTarjeta,function(err){});
            escribirPantallaResultadoConsulta(rows[0].SALDO);
          }

          if(rows[0].CLAVE != claveIngresada){
            intentos = rows[0].INTENTOS - 1;
            conexion.query('UPDATE CLIENTES SET INTENTOS ='+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){});
            escribirPantallaError(1);
            if(intentos == 0){
              bloquearTarjeta(numeroTarjeta);
            }
          }
        }
      );
    }
  );
}

//LISTO
function validarTarjeta(){
  let numeroTarjeta = document.getElementById('campoNumero').value;
  conexion.connect(
    function(err){
      conexion.query(
        'SELECT INTENTOS FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,result,fields){
          if(result[0].INTENTOS == 0 ){
            escribirPantallaBloqueo(numeroTarjeta);
          }else{
            sessionStorage.setItem('numeroTarjeta',numeroTarjeta);
            escribirPantallaSeleccion();//impresion seleccionOperacion    
          }
        }
      );
    }
  );
}