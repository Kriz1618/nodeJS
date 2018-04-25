const express = require('express');

const app = express();

let personas = [
    {
        id: 1,
        nombre: "Kriz"
    },
    {
        id:2,
        nombre: "Jr"
    },
    {
        id:3,
        nombre:'Code'
    }
]

app.get('/', (req, res) => {
    res.render('template', {titulo: 'pug', mensaje: 'Welcome to my page with PUG', personas:personas})    
});

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Running on port 3000');
});