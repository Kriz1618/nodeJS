//console.log(module);

let subscriptores = 22000;

module.exports = {
    subs: subscriptores,
    saludar: () => {
        console.log('Hi people');
    },
    sumar: (a, b) => {
      return a + b;
    }
}