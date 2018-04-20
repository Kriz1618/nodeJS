const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/Kriz1618');
promesa.then((res) => {
    return res.json();
}).then((json) => {
    console.log(json);
});