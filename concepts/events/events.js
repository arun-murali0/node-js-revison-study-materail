const events = require("events");

const emitter = new events();

emitter.on("pizza", (size, toppings) => {
  console.log(`your pizza size is ${size} and it is ${toppings} flavour`);
});

emitter.on("", (size, toppings) => {
  console.log(`your pizza size is ${size} and it is ${toppings} flavour`);
});

console.log("hello world");

emitter.emit("pizza", "large", "mushroom");

exports.module = events;
