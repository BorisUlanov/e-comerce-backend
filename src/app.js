import express from 'express';
import path from 'path';
import { engine } from 'express-handelbars';
import __dirname from './utils';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

//Lista
let productos = [];

//Inicializando el motor de plantillas
app.engine('handlebars', handlebars.engine());

//Ruta absoluta
app.set('views', __dirname + '/views');

//Indicamos que motor de plantillas se usara
app.set('view engine','handlebars');

//Set public(carpeta estática)
app.use(express.static(__dirname+'/public'));

const server = app.listen(8080, () => {
    console.log("Listening en PORT 8080");
})

//Creo server
import {createrServer } from 'http';

//Importo routers
import viewsRouter from './views/index.router.js'

//Importo constructor de socket
import {Server} from 'socket.io';

//Creo servidor socket en el server HTTP
const socketServer = new Server(httpServer);

//Configuro
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views')
}));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine','handlebars');

//cargo public en public(archivo estatico)
app.use(express.static(__dirname + 'public'));

//Uso router para las vistas
app.use('/',viewsRouter);

//Escuchar entrantes
socketServer.on( 'connection', (socket) => {
    console.log("Nuevo cliente online")

    socket.on("message", data => {
        console.log(data)
    })
});