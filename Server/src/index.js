const http = require('http')
const data = require('./utils/data')
const fs = require("fs");
const { log } = require('console');


http
.createServer((req,res)=>{

res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')){

        const id = req.url.split('/')[3]
        const character = data.find(char => id == char.id)

        if (character){
            res.writeHead(200, { 'Content-Type':'application/json' })
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type':'text/plain' })
            res.end('No se encontro el personaje');
        }

    }

})
.listen(3001,'localhost')