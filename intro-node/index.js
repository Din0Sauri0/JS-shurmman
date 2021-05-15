const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send({message:'chanchito feliz'})
});

app.listen(3000, () => {
    console.log({message:'server on port: 3000'});
});