const { Router } = require("express");
const siswaRouter = require("./siswaRouter");
const ayahRouter = require("./ayahRouter");
const ibuRouter = require("./ibuRouter");

const routes = Router();
routes.use("/user", siswaRouter);
routes.use("/ayah", ayahRouter);
routes.use("/ibu", ibuRouter);

module.exports = routes;
