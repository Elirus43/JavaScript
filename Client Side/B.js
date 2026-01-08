console.log("B.js Started");

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function wait() {
  await delay(3000);
  console.log("After 3 seconds");
}

wait();

console.log("B.js ended");
