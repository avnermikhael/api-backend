const {
  selectSiswa,
  insertSiswa,
  updateSiswa,
  deleteSiswa,
  selectAllSiswa,
  updateAyahSiswa,
  updateIbuSiswa,
  updateWaliSiswa,
  updatePriodikSiswa,
} = require("../model/Siswa");

class SiswaController {
  async doSearchSiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchSiswa", err);
    }
  }

  async doSearchAllSiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectAllSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllSiswa", err);
    }
  }

  async doInsertSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertSiswa", err);
    }
  }

  async doUpdateSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateSiswa", err);
    }
  }

  async doUpdateAyahSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateAyahSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateAyahSiswa", err);
    }
  }

  async doUpdateIbuSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateIbuSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateIbuSiswa", err);
    }
  }

  async doUpdateWaliSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateWaliSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateWaliSiswa", err);
    }
  }

  async doUpdatePriodikSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updatePriodikSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePriodikSiswa", err);
    }
  }

  async doDeleteSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteSiswa", err);
    }
  }
}

module.exports = new SiswaController();
