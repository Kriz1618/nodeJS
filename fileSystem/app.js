const fs = require('fs');
console.log('Start');

/*fs.readFile('file.csv', 'utf-8', (error, data) => {
    if (error){
        console.log(`Error ${error}`)
    }else{
        console.log(data)
    }
    
});*/

let data = fs.readFileSync('data.csv', 'utf-8');

console.log(data);



/*fs.rename('file.csv','data.csv', (error) => {
		if (error) throw error;
		console.log('Renombrado!');
});

fs.appendFile('data.csv','\n Bye!!!', (error) => {
	if (error) console.log(`Error ${error}`);
});

fs.unlink('data2.csv', (error) => {
	if (error) throw error;
	console.log('Eliminado!');
});*/

//fs.createReadStream('data.csv').pipe(fs.createWriteStream('data3.csv'));

/*fs.readdir('./../fileSystem', (error, files)=>{
	files.forEach(file => {
		console.log(file)
	});
});*/

fs.readdirSync('./../fileSystem').forEach(file => {
	console.log(file)
});

console.log('End');