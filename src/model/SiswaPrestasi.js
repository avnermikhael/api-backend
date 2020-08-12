var db = require("../helper/DBUtil");

const insertSiswaPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO siswa_prestasi" + "(id_siswa,id_prestasi)" + "VALUES" + "?";
    var values = [[param.id_siswa, param.id_prestasi]];

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

const selectSiswaPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM siswa_prestasi where id_siswa = ?";
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

const udpateSiswaPrestasi = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE siswa_prestasi set id_prestasi=? where id_siswa=?";
    var values = [param.id_prestasi, param.id_siswa];

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

const deleteSiswaPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM siswa_prestasi where id_siswa=?";
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
  insertSiswaPrestasi,
  selectSiswaPrestasi,
  udpateSiswaPrestasi,
  deleteSiswaPrestasi,
};
