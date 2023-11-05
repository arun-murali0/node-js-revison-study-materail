//port used to communicate to parent node
const { parentPort } = require("worker_threads");

let counter = 0;
for (let i = 1; i <= 10_000_000_00; i++) {
  counter++;
}

//used to communicate to main thread
setTimeout(() => {
  // Send the result to the main thread
  parentPort.postMessage(counter);
}, 0);
