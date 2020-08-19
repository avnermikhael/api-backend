const {
  selectPriodik,
  insertPriodik,
  udpatePriodik,
  deletePriodik,
  selectAllPriodik,
} = require("../model/Priodik");

class PriodikController {
  async doSearchPriodik(req, res) {
    const param = req.query;
    try {
      const result = await selectPriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPriodik", err);
    }
  }

  async doSearchAllPriodik(req, res) {
    const param = req.query;
    try {
      const result = await selectAllPriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllPriodik", err);
    }
  }

  async doInsertPriodik(req, res) {
    const param = req.body;
    try {
      const result = await insertPriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPriodik", err);
    }
  }

  async doUpdatePriodik(req, res) {
    const param = req.body;
    try {
      const result = await udpatePriodik(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePriodik", err);
    }
  }

  async doDeletePriodik(req, res) {
    const param = req.query;
    try {
      const result = await deletePriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePriodik", err);
    }
  }
}

module.exports = new PriodikController();
