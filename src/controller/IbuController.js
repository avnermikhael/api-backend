const { selectIbu, insertIbu, udpateIbu, deleteIbu } = require("../model/Ibu");

class IbuController {
  async doSearchIbu(req, res) {
    const param = req.query;
    try {
      const result = await selectIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchIbu", err);
    }
  }

  async doInsertIbu(req, res) {
    const param = req.body;
    try {
      const result = await insertIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertIbu", err);
    }
  }

  async doUpdateIbu(req, res) {
    const param = req.body;
    try {
      const result = await udpateIbu(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateIbu", err);
    }
  }

  async doDeleteIbu(req, res) {
    const param = req.query;
    try {
      const result = await deleteIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteIbu", err);
    }
  }
}

module.exports = new IbuController();
