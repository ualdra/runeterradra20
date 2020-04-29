const http = require('http');
const fs = require('fs');


var url = 'http://127.0.0.1:21337/positional-rectangles';
var estados = [];
var estado = {};

var interval = setInterval(function(){
    if(JSON.stringify(estado).includes("Menus")){
        guardarPartida();
        clearInterval(interval);
    } else {
        partida();
    }
},2000);

function partida(){
    http.get(url, (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data',(chunk) => {rawData += chunk;});
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                if(estados.length == 0 || estados.lastIndexOf(parsedData) != estados.length - 1){
                    estado = parsedData;
                    estados.push(estado);
                    console.log("Estado guardado.");
                }
              } catch (e) {
                console.error(e.message);
              }
        });
    });
}

function guardarPartida(){
    if(fs.existsSync('partida.json')){
        fs.unlinkSync('partida.json');
    }
    console.log("Guardando en archivo...");
    estados.forEach((est) => {
        fs.appendFile('partida.json', JSON.stringify(est,null,2),'utf8', function(err) {
            if(err) {
                return console.log(err);
            }
        });
    });
    console.log("Partida Guardada.");
}

