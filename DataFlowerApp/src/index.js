/** Lineas para construir la app en electron */
const {app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

/** Actualizacion automatica de la ventana mientras se mantiene el proceso de desarrollo */
if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname,{

    })
}

let ventanaPrincipal
/** Lanzador de la ventana */
app.on('ready', () => { 
    ventanaPrincipal = new BrowserWindow({ frame: false, resizable: false,scroll: true,fullscreen: true,icon: path.join(__dirname,'iconos/rosa.ico')});
    ventanaPrincipal.loadURL(url.format({
        pathname: path.join(__dirname, 'html/index.html'),
        protocol: 'file',
        slashes: true
    }))
});