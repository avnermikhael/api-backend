var db = require("../helper/DBUtil");

const insertKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO keluar" + "(id_keluar,alasan,id_siswa)" + "VALUES" + "?";
    var values = [
      [
        param.id_keluar,
        // param.info_keluar,
        // param.tanggal_keluar,
        param.alasan,
        param.id_siswa,
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

const selectKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM keluar where id_keluar = ?";
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

const selectAllKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM keluar";
    // var sql_var = [param.id];
    db.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const udpateKeluar = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE keluar set alasan=? where id_keluar=?";
    var values = [param.alasan, param.id_keluar];

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

const deleteKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM keluar where id_keluar=?";
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
  insertKeluar,
  selectKeluar,
  udpateKeluar,
  deleteKeluar,
  selectAllKeluar,
};
