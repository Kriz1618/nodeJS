const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');


let cpu = os.cpus();
let system = os.platform();
let user = os.hostname();

//console.log(cpu,system);
//console.log(user);
//let cpu_string = JSON.stringify(cpu);
setTimeout( () => {
    console.log("Finished");
}, 2000);
    

//fs.appendFile('file.txt',`CPU Info: ${cpu_string}`  , function(error){
//  if (error) {
//    console.log("Error creating the file");
//  }    
//});