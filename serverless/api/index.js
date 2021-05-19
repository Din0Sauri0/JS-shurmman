//librerias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//archivos necesarios
const meals = require('./routes/meals');
const orders = require('./routes/orders');
const auth = require('./routes/auth');

//ejecucion express
const app = express();

//configurar middleware
app.use(bodyParser.json());
app.use(cors());

//conexion con mongo
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//rutas pruebas
app.get('/test', (req, res) => {
    res.send('chanchito feliz');
});
//Rutas
app.use('/api/meals', meals);
app.use('/api/orders', orders);
app.use('/api/auth', auth);
//
module.exports = app;


