const {
  selectBeasiswa,
  insertBeasiswa,
  udpateBeasiswa,
  deleteBeasiswa,
  selectAllBeasiswa,
} = require("../model/Beasiswa");

class BeasiswaController {
  async doSearchBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchBeasiswa", err);
    }
  }

  async doSearchAllBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectAllBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllBeasiswa", err);
    }
  }

  async doInsertBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertBeasiswa", err);
    }
  }

  async doUpdateBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await udpateBeasiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateBeasiswa", err);
    }
  }

  async doDeleteBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteBeasiswa", err);
    }
  }
}

module.exports = new BeasiswaController();
