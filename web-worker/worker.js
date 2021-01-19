self.addEventListener("message", function (event) {
  self.postMessage("message recieved", { event });
});
