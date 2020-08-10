require("dotenv").config();
const express = require("express");
const http = require("http");
const routes = require("./src/routes");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send(`${process.env.APP_NAME} ${process.env.APP_VERSION}`)
);

app.use("/api/v1", routes);

app.use(errors());

var httpServer = http.createServer(app);

httpServer.listen(port, () =>
  console.log(`Server started, listening on port ${port}!`)
);

// const { insertUser } = require("./src/model/User");
// const { insertUser } = require("./src/model/User");

// console.log(process.env.APP_NAME);

// async function test() {
//   var param = {
//     id: 4,
//     name: "Delta",
//     email: "delta@yahoo.com",
//     password: "12345",
//   };
//   var createdBy = "tester";
//   let result = await insertUser(param, createdBy);
//   console.log(result);
// }

// async function test() {
//   var param = { id: 4 };
//   let data = await selectUser(param);
//   console.log(data);
// }

// async function test() {
//   var param = { name: "Name 4 updated", email: "email4updated@yahoo.com" };
//   var id = "4";
//   let result = await updateUser(param, id);
//   console.log(result);
// }

// async function test() {
//   var id = "4";
//   let result = await deleteUser(id);
//   console.log(result);
// }

// test();
