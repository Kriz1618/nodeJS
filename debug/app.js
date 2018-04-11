const extra = require('./extra');

extra.saludar();


let curso = "node";
curso = "node.js";
curso = "node.js tutos";
debugger;
console.log(curso);

x = ()=>{
    return 1 + 1;
}

console.log(x())

// con npm inspect app.js iniciamos debug
// con n se desplaza por cada linea del código
// con rpl se puede ir ejecutando cada linea y consultar el valor de las variables
// con Ctrl + c se cierra la consola de rpl
// en consola rpl con c ejecutamos todo el código
// con debugger creamos un breakpoint en el código, de ese modo al ejecutar la instrucción c en modo inspect ejecuta todo el código hasta el debugger
