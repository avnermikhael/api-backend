var db = require("../helper/DBUtil");

const insertAyah = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO ayah" +
      "(id_ayah,nama_ayah,nik_ayah,tahun_lahir,pendidikan,pekerjaan,penghasilan_bulanan,berkebutuhan_khusus)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_ayah,
        param.nama_ayah,
        param.nik_ayah,
        param.tahun_lahir,
        param.pendidikan,
        param.pekerjaan,
        param.penghasilan_bulanan,
        param.berkebutuhan_khusus,
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

const selectAyah = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM ayah where id_ayah = ?";
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

const udpateAyah = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE ayah set nama_ayah=? where id_ayah=?";
    var values = [param.nama_ayah, param.id_ayah];

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

const deleteAyah = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM ayah where id_ayah=?";
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
  insertAyah,
  selectAyah,
  udpateAyah,
  deleteAyah,
};
