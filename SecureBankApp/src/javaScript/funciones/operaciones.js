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

  escribirPantallaRetirarTarjeta();
  
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


function actualizarSaldo(){
  let intentos,nuevoSaldo,retiroAcumulado;
  let numeroTarjeta = sessionStorage.getItem('numeroTarjeta');
  let cantidadRetiro = sessionStorage.getItem('cantidadRetiro');
  sessionStorage.setItem('claveIngresada',document.getElementById('campoClave').value);
  let claveIngresada = sessionStorage.getItem('claveIngresada');

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT SALDO,INTENTOS,CLAVE,TOPEDIARIO FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,rows,fields){

          retiroAcumulado = parseInt(rows[0].TOPEDIARIO) + parseInt(cantidadRetiro); 
          nuevoSaldo = rows[0].SALDO - cantidadRetiro;
          if(claveIngresada != rows[0].CLAVE){
            intentos = rows[0].INTENTOS - 1;
            conexion.query('UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTAREJTA = '+numeroTarjeta,function(err){});
            escribirPantallaError(1);
            if(intentos == 0){
              bloquearTarjeta();
            }
          }else{
            if(retiroAcumulado >= 2500000){
            escribirPantallaError(3);
            }else{
              if(cantidadRetiro > rows[0].SALDO){
                escribirPantallaError(2);
              }else{      
              escribirResultadoRetiro(nuevoSaldo);
              conexion.query('UPDATE CLIENTES SET SALDO ='+nuevoSaldo+',TOPEDIARIO = '+retiroAcumulado+',INTENTOS = 3 WHERE NTARJETA = '+numeroTarjeta,function(err){});
              }
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


/**Funcion extra para fines esteticos */
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
