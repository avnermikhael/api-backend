var db = require("../helper/DBUtil");

const insertPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO prestasi" +
      "(id_prestasi,jenis_prestasi,tingkat_prestasi,nama_prestasi,tahun,penyelenggara)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_prestasi,
        param.jenis_prestasi,
        param.tingkat_prestasi,
        param.nama_prestasi,
        param.tahun,
        param.penyelenggara,
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

const selectPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM prestasi where id_prestasi = ?";
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

const udpatePrestasi = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE prestasi set nama_prestasi=? where id_prestasi=?";
    var values = [param.nama_prestasi, param.id_prestasi];

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

const deletePrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM prestasi where id_prestasi=?";
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
  insertPrestasi,
  selectPrestasi,
  udpatePrestasi,
  deletePrestasi,
};
