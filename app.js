require("dotenv").config();
const express = require("express");
const http = require("http");
const routes = require("./src/routes");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send(`${process.env.APP_NAME} ${process.env.APP_VERSION}`)
);

app.use("/api/v1", routes);

app.use(errors());

var httpServer = http.createServer(app);

httpServer.listen(port, () =>
  console.log(`Server started, listening on port ${port}!`)
);
//rapih coding
