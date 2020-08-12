var db = require("../helper/DBUtil");

const insertBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO beasiswa" +
      "(id_beasiswa,jenis_beasiswa, keterangan)" +
      "VALUES" +
      "?";
    var values = [[param.id_beasiswa, param.jenis_beasiswa, param.keterangan]];

    db.query(sql, [values], function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const selectBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM beasiswa where id_beasiswa = ?";
    var sql_var = [param.id];
    db.query(sql, sql_var, function (err, rows, fields) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const udpateBeasiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE beasiswa set keterangan=? where id_beasiswa=?";
    var values = [param.keterangan, param.id_beasiswa];

    db.query(sql, values, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM beasiswa where id_beasiswa=?";
    var values = [param.id];

    db.query(sql, values, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  insertBeasiswa,
  selectBeasiswa,
  udpateBeasiswa,
  deleteBeasiswa,
};
