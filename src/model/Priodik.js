var db = require("../helper/DBUtil");

const insertPriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO priodik" +
      "(id_priodik,tinggi_badan,berat_badan)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_priodik,
        param.tinggi_badan,
        param.berat_badan,
        // param.jarak_sekolah,
        // param.waktu_tempuh,
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

const selectPriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM priodik where id_priodik = ?";
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

const selectAllPriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "SELECT p.id_priodik, p.tinggi_badan, p.berat_badan, s.id_siswa, s.nama_lengkap FROM priodik as p LEFT JOIN siswa as s on p.id_priodik = s.id_priodik";
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

const udpatePriodik = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "UPDATE priodik set tinggi_badan=?, berat_badan=?  where id_priodik=?";
    var values = [param.tinggi_badan, param.berat_badan, param.id_priodik];

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

const deletePriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM priodik where id_priodik=?";
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
  insertPriodik,
  selectPriodik,
  udpatePriodik,
  deletePriodik,
  selectAllPriodik,
};
