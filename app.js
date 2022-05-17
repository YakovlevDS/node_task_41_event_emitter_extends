// const Emitter = require("events");

// let emitter = new Emitter();
// let eventName = "greet";

// emitter.on(eventName, () =>{
//     console.log("Hello all!");
// });

// emitter.on(eventName,  ()=> {
//     console.log("Привет!");
// });

// emitter.emit(eventName);


// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, (data)=>{
//     console.log(data);
// });
 
// emitter.emit(eventName, "Hi!");


const EventEmitter = require("events");
  
let eventName = "greet";
 
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}
 
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
  
user.sayHi("Мне нужна твоя одежда...");