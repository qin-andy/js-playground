const http = require("http");

const PORT = 5000;
const server = http.createServer(routes);

function routes(request, response) {
  if (request.url === "/") {
    response.write("Hello, world!");
  }
  response.end();
}

server.listen(PORT);

console.log(`Server is listenning on port ${PORT}`);