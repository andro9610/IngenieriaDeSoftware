CREATE DATABASE flowerdatabase;

USE flowerdatabase;

CREATE TABLE PRODUCTOS(
    IDPRODUCTO INT(10) PRIMARY KEY NOT NULL,
    DESCRIPCIONPRODUCTO VARCHAR(30) NOT NULL,
    CANTIDAD INT(9) NOT NULL 
);

/*El campo METRICA hace referencia a en que unidades se cuenta el material, ejemplo:
  el abono se puede contar en Kilogramos, arrobas, etc...*/
CREATE TABLE MATERIALES(
    IDMATERIAL INT(10) PRIMARY KEY NOT NULL,
    DESCRIPCIONMATERIAL VARCHAR(30) NOT NULL,
    CANTIDAD INT(9) NOT NULL,
    METRICA VARCHAR(10) NOT NULL
);

CREATE TABLE HISTORIAL(
    IDHISTORIAL INT(10) PRIMARY KEY NOT NULL,
    FECHA DATETIME(6) NOT NULL,
    DETALLEHISTORIAL VARCHAR(50) NOT NULL
);

CREATE TABLE COMPRADOR(
    IDCOMPRADOR INT(10) PRIMARY KEY NOT NULL,
    DESCRIPCIONCOMPRADOR VARCHAR(50) NOT NULL
);