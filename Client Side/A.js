console.log("A.js started");

function call() {
  setTimeout(() => {
    console.log("Hello World");
  }, 2000);
}

call();
console.log("A.js ended");
