const fs = require('fs');
const http = require('http');

let tmpJSON = {};
let lastState = {};
var rectangles = [];

lastState = {
    "Game": {
        "PlayerName":null,
        "OpponentName":null,
        "GameState":"InProgress",
        "Screen":{"ScreenWidth":1920,"ScreenHeight":1080},
        "Plays":{
            "Rectangles":[

            ]
        }
    }
};

tmpJSON = {
    "Game": {
        "PlayerName":null,
        "OpponentName":null,
        "GameState":"InProgress",
        "Screen":{"ScreenWidth":1920,"ScreenHeight":1080},
        "Plays":{

        }
    }
};

function getDataFromGame(url, lastState) {

    return new Promise((resolve, reject) => {
        http.get(url, resp => {

            let data = '';

            resp.on('data', d => {
                data += d;
            });
            
            resp.on('end', () => {
                
                if (lastState.Game.Plays[lastState.Game.Plays.length - 1] != JSON.parse(data).Rectangles) {
                    
                    //Guardo lastState
                    
                    lastState.Game.PlayerName = JSON.parse(data).PlayerName;
                    lastState.Game.OpponentName = JSON.parse(data).OpponentName;
                    lastState.Game.GameState = JSON.parse(data).GameState;
                    lastState.Game.Screen = JSON.parse(data).Screen;
                    rectangles.push(JSON.parse(data).Rectangles);
                    lastState.Game.Plays = rectangles;

                    // Guardo JSON

                    tmpJSON.Game.PlayerName = JSON.parse(data).PlayerName;
                    tmpJSON.Game.OpponentName = JSON.parse(data).OpponentName;
                    tmpJSON.Game.GameState = JSON.parse(data).GameState;
                    tmpJSON.Game.Screen = JSON.parse(data).Screen;
                    tmpJSON.Game.Plays = rectangles;
                }
                resolve()

            });
            
        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err)
        });
    });
    
}

function firstCall() {

    deleteJSON();

    Promise.all([
        getDataFromGame('http://localhost:21337/positional-rectangles', lastState)
    ]).then(() => {
        
        writingInJSON(tmpJSON);

        var interval = setInterval(function() {
                
            if (lastState.Game.GameState == 'Menus')
                clearInterval(interval);
            else
                main();
    
        }, 2000);

    })
    
}

function main() {

    Promise.all([
        getDataFromGame('http://localhost:21337/positional-rectangles', lastState)
    ]).then(() => {
        
        writingInJSON(tmpJSON);

    })
    
}

function writingInJSON(cardsData) {

    let gameData = {};

    fs.exists('gameData.json', function(exists) {

        if (exists) {

            fs.readFile('gameData.json', function readFileCallback(err, data) {

                if (err) {
                    console.log(err);
                } else {

                    gameData = JSON.parse(data);
    
                    for (i = 0; i < cardsData.Game.Plays.length; i++) {
                        
                        if (JSON.stringify(gameData.Game.Plays[gameData.Game.Plays.length - 1])
                        .indexOf(JSON.stringify(cardsData.Game.Plays[i])) == -1) {
                            gameData.Game.Plays[gameData.Game.Plays.length - 1].push(cardsData.Game.Plays[i]);
                        }

                    }
    
                    let json = JSON.stringify(gameData, null, 2);
                    fs.writeFile('gameData.json', json, 'utf8', (err) => {
                        if (err) throw err;
                        console.log('\nDatos escritos correctamente1');
                    });
                }

            });

        } else {

            let json = JSON.stringify(cardsData, null, 2);
            fs.writeFile('gameData.json', json, 'utf8', (err) => {
                if (err) throw err;
                console.log('\nDatos escritos correctamente2');
            });

        }
        
    });

}

function deleteJSON() {
    fs.exists('gameData.json', function(exists) {

        if (exists) {
            fs.unlink('gameData.json', function (err) {
                if (err) throw err;
                console.log('¡Archivo borrado!');
            });
        }

    });
}

firstCall();
