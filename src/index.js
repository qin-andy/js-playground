const path = require("path");
const express = require("express");

const port = 5000;
const app = express();

app.use(express.static("src"));
app.use(express.static("assets"));

// app.use("/public", express.static(__dirname + "/public"));
// app.use("/src", express.static(__dirname + "/src"));
// app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

app.get("/tictactoe.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/tictactoe.html"));
});

app.listen(port, () => {
  console.log('Express app listening at localhost: ${port}');
});

console.log(`Server is listenning on port ${port}`);