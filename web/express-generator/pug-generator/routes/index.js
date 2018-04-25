var express = require('express');
var router = express.Router();

/* GET home page. */
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

router.get('/', (req, res, next) => {
  res.render('index', {titulo: 'Pug', mensaje: 'Welcome to my page with HBS', personas: personas});   
});

/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
