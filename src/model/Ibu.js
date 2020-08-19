var db = require("../helper/DBUtil");

const insertIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "INSERT INTO ibu" + "(id_ibu,nama_ibu,nik_ibu)" + "VALUES" + "?";
    var values = [
      [
        param.id_ibu,
        param.nama_ibu,
        param.nik_ibu,
        // param.tahun_lahir,
        // param.pendidikan,
        // param.pekerjaan,
        // param.penghasilan_bulanan,
        // param.berkebutuhan_khusus,
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

const selectIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM ibu where id_ibu = ?";
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

const selectAllIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "SELECT i.id_ibu, i.nama_ibu, i.nik_ibu, s.id_siswa, s.nama_lengkap FROM ibu as i LEFT JOIN siswa as s on i.id_ibu = s.id_ibu";
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

const udpateIbu = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE ibu set nama_ibu=? where id_ibu=?";
    var values = [param.nama_ibu, param.id_ibu];

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

const deleteIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM ibu where id_ibu=?";
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
  insertIbu,
  selectIbu,
  udpateIbu,
  deleteIbu,
  selectAllIbu,
};
