const { Router } = require("express");
const siswaRouter = require("./siswaRouter");
const ayahRouter = require("./ayahRouter");
const ibuRouter = require("./ibuRouter");
const waliRouter = require("./waliRouter");
const priodikRouter = require("./priodikRouter");
const beasiswaRouter = require("./beasiswaRouter");
const prestasiRouter = require("./prestasiRouter");
const keluarRouter = require("./keluarRouter");
const siswabeasiswaRouter = require("./siswabeasiswaRouter");
const siswaprestasiRouter = require("./siswaprestasiRouter");

const routes = Router();
routes.use("/user", siswaRouter);
routes.use("/ayah", ayahRouter);
routes.use("/ibu", ibuRouter);
routes.use("/wali", waliRouter);
routes.use("/priodik", priodikRouter);
routes.use("/beasiswa", beasiswaRouter);
routes.use("/prestasi", prestasiRouter);
routes.use("/keluar", keluarRouter);
routes.use("/siswabeasiswa", siswabeasiswaRouter);
routes.use("/siswaprestasi", siswaprestasiRouter);

module.exports = routes;
