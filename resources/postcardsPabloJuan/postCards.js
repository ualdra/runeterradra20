var req = require('request');

/* Burrada de Pablo */
/* const cartas = require('fs')
const regiones = require('fs') */

const fs = require('fs');

fs.readFile('../data/1.1.0/globals-en_us.json', (err, data) => {
    if (err) throw err;
  
    let todo = JSON.parse(data);
    todo.regions.forEach(region => { 
      req.post({
        url: 'http://apis.manelme.com/data/regions',
        body: region,
        json: true
      }, function(error, response, body){
    });
    }); 
});

fs.readFile('../data/1.1.0/set2-en_us.json', (err, data) => {
  if (err) throw err;
  
  let todocartas = JSON.parse(data);
  todocartas.forEach(
    (carta) => {  
      req.post({
        url: 'http://apis.manelme.com/data/cards',
        body: carta,
        json: true
      }, function(error, response, body){
    });
  })


});