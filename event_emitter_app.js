/*
const tutorial = require('./tutorial');
//console.log('teste');
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2 )=>{
    //console.log('tutorial event has occurred');
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }

    get name (){
        return this._name;
    }
}

let bruno = new Person('Bruno');
let cristina = new Person('Cristina');

cristina.on('name', ()=>{
    console.log('my name is '+ cristina.name);
})


bruno.on('name', ()=>{
    console.log('my name is '+ bruno.name);
})

bruno.emit('name');
cristina.emit('name');