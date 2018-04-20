let prom = require('./promise');
//https://www.youtube.com/watch?v=EatuQDKsWpY
/*let promesa = new Promise((resolve, reject)=> {
    //resolve('Proceso existoso!!!');
    reject('Error!!!');
});

promesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});*/

prom.calcular(3, 1).then((resultado) =>{
    console.log(resultado);
}, (error) => {
    console.log(error);
});