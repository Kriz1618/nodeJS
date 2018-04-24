//https://www.youtube.com/watch?v=haB70z6ISDI&index=17&list=PLvimn1Ins-41lVr-SPWF1mdNTzog05TcA&t=0s
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

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('Running on port 3000');
})