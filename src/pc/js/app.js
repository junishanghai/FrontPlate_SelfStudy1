'use strict';
let co = require('co');

function* TestChild() {
    let prom = new Promise((resolve) => {
        setTimeout(()=>{resolve('OK')}, 3000);
    });
    let ret = yield prom;
    alert(ret);
}

class Main {
    constructor() {
        co(TestChild);
    }
}
new Main();