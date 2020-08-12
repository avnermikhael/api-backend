var db = require("../helper/DBUtil");

const insertSiswaBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO siswa_beasiswa" +
      "(id_siswa,id_beasiswa,tahun_mulai,tahun_selesai)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_siswa,
        param.id_beasiswa,
        param.tahun_mulai,
        param.tahun_selesai,
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

const selectSiswaBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM siswa_beasiswa where id_beasiswa = ?";
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

const udpateSiswaBeasiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "UPDATE siswa_beasiswa set tahun_mulai=?, tahun_selesai=? where id_beasiswa=?";
    var values = [param.tahun_mulai, param.tahun_selesai, param.id_beasiswa];

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

const deleteSiswaBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM siswa_beasiswa where id_beasiswa=?";
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
  insertSiswaBeasiswa,
  selectSiswaBeasiswa,
  udpateSiswaBeasiswa,
  deleteSiswaBeasiswa,
};
