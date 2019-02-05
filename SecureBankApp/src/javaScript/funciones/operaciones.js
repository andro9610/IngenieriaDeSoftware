/**Importar y configurar mysql, para conectar la base de datos */
var mysql      = require('mysql');
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M4h07obd',
    port: 3306,
    database : 'securebankdatabase'
});

/** Operaciones que permiten las operaciones del cajero */
//LISTO
function actualizarClave( numeroTarjeta, claveActual, nuevaClave, nuevaClaveConfirmada){
  let intentos;

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT CLAVE,INTENTOS FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
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

          if(nuevaClave != nuevaClaveConfirmada){
            console.log('clave incorrecta'); //impreison de pantalla de clave incorrecta
            console.log('fin de operacion'); // impresion de pantalla de fin de operacion
            conexion.end();
          }

          if(result[0].CLAVE == claveActual && nuevaClave == nuevaClaveConfirmada){
            conexion.query(
              'UPDATE CLIENTES SET CLAVE ='+nuevaClave+',INTENTOS = 3 WHERE NTARJETA = '+numeroTarjeta, function(err){}
            );
            console.log('clave actualizada'); // imprimir pantalla de clave actualizada correctamente
            console.log('fin de operacion'); // imprimir pantalla de fin de operacion
            conexion.end();
          }

        }
      );
    }
  );
}

//LISTO
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
          console.log('Su tarjeta ha sido bloqueada');//Imprimir pantalla de tarjeta bloqueada
          conexion.end();
        }
      );
    }
  );  
}

//LISTO
function consultarSaldo( numeroTarjeta, claveActual){
  let intentos;

  conexion.connect(
    function(err){
      conexion.query(
        'SELECT CLAVE,SALDO,INTENTOS FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,result,fields){
          if(result[0].CLAVE != claveActual){
            intentos = result[0].INTENTOS - 1;
            conexion.query(
              'UPDATE CLIENTES SET INTENTOS = '+intentos+' WHERE NTARJETA = '+numeroTarjeta,function(err){}
            );
            console.log('clave incorrecta'); // impresion de pantalla de clave incorrecta
            console.log('fin de Operacion');// impresion de pantalla de fin de operacion
            conexion.end();
          }else{
            conexion.query(
              'UPDATE CLIENTES SET INTENTOS = 3 WHERE NTARJETA = '+numeroTarjeta,function(err){}
            );
            console.log('saldo actual = '+result[0].SALDO); // se imprime pantalla de saldoActual
            console.log('fin de Operacion'); // se imprime pantalla de fin de operacion
            conexion.end();
          }      
        }
      );
    }
  );
}

//LISTO
function validarTarjeta(numeroTarjeta){
  conexion.connect(
    function(err){
      conexion.query(
        'SELECT INTENTOS FROM CLIENTES WHERE NTARJETA = '+numeroTarjeta,
        function(err,result,fields){
          if(result[0].INTENTOS == 0 ){
            bloquearTarjeta(numeroTarjeta);
          }else{
            console.log('seleccione su operacion'); //impresion seleccionOperacion
            conexion.end();
          }
        }
      );
    }
  );
}
