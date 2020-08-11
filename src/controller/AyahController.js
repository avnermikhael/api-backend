const {
  selectAyah,
  insertAyah,
  udpateAyah,
  deleteAyah,
} = require("../model/Ayah");

class AyahController {
  async doSearchAyah(req, res) {
    const param = req.query;
    try {
      const result = await selectAyah(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAyah", err);
    }
  }

  async doInsertAyah(req, res) {
    const param = req.body;
    try {
      const result = await insertAyah(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertAyah", err);
    }
  }

  async doUpdateAyah(req, res) {
    const param = req.body;
    try {
      const result = await udpateAyah(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateAyah", err);
    }
  }

  async doDeleteAyah(req, res) {
    const param = req.query;
    try {
      const result = await deleteAyah(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteAyah", err);
    }
  }
}

module.exports = new AyahController();
