var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get("/", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

//FUNCION RANDOM
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


//RUTA 2
app.put("/ruta2/:number", (req, res) => {
    let numrandom = getRandomInt(0,req.params.number);
    let r = {'Numero recibido':req.params.number,'Numero Aleatorio entre 0 y Numero recibido':numrandom};
    res.json(r);
  });


app.put('/generasiguiente/:number', (req, res) => {
    let r = {'dato': req.params.number};
    res.json(r);
});

app.get("/ruta3", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta4", async function (req, res) {
    let r = {};
    res.json(r);
});

//RUTA 5
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post("/ruta5/subruta/todos",  (req, res) => {

        const datos = req.body
        console.log(datos);
       return res.json({datos});
})

app.get("/ruta6/crear", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta7/echo", async function (req, res) {
    let r = { texto: req.query.texto, nombre: req.query.nombre, proyecto:req.query.proyecto};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});