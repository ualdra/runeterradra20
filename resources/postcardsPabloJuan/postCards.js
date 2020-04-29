var req = require('request');

const cartas = require('fs')
const regiones = require('fs')

regiones.readFile('../data/1.0.0/globals-en_us.json', (err, data) => {
    if (err) throw err;
  
    let todo = JSON.parse(data);
    todo.regions.forEach(region => { 
      req.post({
        url: 'http://localhost:8082/api/regions',
        body: region,
        json: true
      }, function(error, response, body){
    });
    }); 
});

cartas.readFile('../data/1.0.0/set1-en_us.json', (err, data) => {
  if (err) throw err;
  
  let todocartas = JSON.parse(data);
  todocartas.forEach(carta => {  
    req.post({
      url: 'http://localhost:8082/api/cards',
      body: carta,
      json: true
    }, function(error, response, body){
  });

  }); 
});