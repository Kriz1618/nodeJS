const _ = require('lodash');
const argv = require('yargs').argv;

let comand = process.argv[2];

//console.log(argv.argv);
//console.log(comand);
if (argv.user === "Kriz") {
    let x = {"nombre": "Jaime"}
    let y = {"chapa": "Xion"}
    let z = [
        {"nombre": "Jaime", "apellido": "Medina", "edad": 34},
        {"nombre": "Luz", "apellido": "bohorques", "edad": 32}
    ]

    /*let resultado = _.assign(x, y);
    console.log(resultado);

    _.times(3, ()=> console.log("Join us!!"));*/

    let result = _.find(z, {nombre: "Jaime", apellido: "Medina"});

    console.log(result);
}else{
    console.log("user invalid");
}
    
    
