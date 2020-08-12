var db = require("../helper/DBUtil");

const insertWali = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO wali" +
      "(id_wali,nama_wali,nik_wali,tahun_lahir,pendidikan,pekerjaan,penghasilan_bulanan)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_wali,
        param.nama_wali,
        param.nik_wali,
        param.tahun_lahir,
        param.pendidikan,
        param.pekerjaan,
        param.penghasilan_bulanan,
      ],
    ];

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

const selectWali = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM wali where id_wali = ?";
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

const udpateWali = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE wali set nama_wali=? where id_wali=?";
    var values = [param.nama_wali, param.id_wali];

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

const deleteWali = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM wali where id_wali=?";
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
  insertWali,
  selectWali,
  udpateWali,
  deleteWali,
};
