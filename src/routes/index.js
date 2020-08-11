const { Router } = require("express");
const siswaRouter = require("./siswaRouter");
const ayahRouter = require("./ayahRouter");

const routes = Router();
routes.use("/user", siswaRouter);
routes.use("/ayah", ayahRouter);

module.exports = routes;
