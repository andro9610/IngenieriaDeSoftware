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
          //Continuar mañana desde aqui
        }
      );
    }
  );




}


function actualizarSaldo( numeroTarjeta, claveActual, cantidadRetiro){
  let topeRetiro = 2500000;
  let intentos;
  let nuevoSaldo;
  conexion.connect(
    function(err){
      conexion.query(
        'SELECT CLAVE,SALDO,INTENTOS,TOPEDIARIO FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,result,fields){
          if(result[0].CLAVE != claveActual){
            intentos = result[0].INTENTOS - 1;
            conexion.query(
              'UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){}
            );
            console.log('clave incorrecta'); // impresion de pantalla de clave incorrecta
            console.log('fin de Operacion');// impresion de pantalla de fin de operacion
            conexion.end();
          }

          if((result[0].TOPEDIARIO+cantidadRetiro) >= topeRetiro){
            console.log('Ha excedido el tope diario para retiros'); //impreison de pantalla de topeExcedido
            console.log('fin de Operacion'); // impresion de pantalla de fin de operacion
            conexion.end();
          }

          if(result[0].SALDO < cantidadRetiro){
            console.log('no hay fondos suficientes para realizar esta accion'); // impresion de pantalla de saldoInsuficiente
            console.log('fin de Operacion');
            conexion.end();
          }

          if(result[0].CLAVE == claveActual && (result[0].TOPEDIARIO+cantidadRetiro) < topeRetiro && result[0].SALDO > cantidadRetiro){
            nuevoSaldo = result[0].SALDO - cantidadRetiro;
            topeRetiro = result[0].TOPEDIARIO + cantidadRetiro;
            conexion.query(
              'UPDATE CLIENTES SET SALDO = '+nuevoSaldo+',INTENTOS = 3, TOPEDIARIO = '+topeRetiro+' WHERE NTARJETA = '+numeroTarjeta,function(err){}
            );
            console.log('retiro Realizado correctamente'); // imprimir pantalla retiro realizado
            console.log('fin de operacion'); // imprimir pantalla fin operacion
            conexion.end();
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
