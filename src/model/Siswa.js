var db = require("../helper/DBUtil");

const insertSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO siswa" +
      "(id_siswa,nama_lengkap,jenis_kelamin,tempat_lahir,tanggal_lahir,agama,kewarganegaraan,kebutuhan_khusus, alamat, tempat_tinggal, moda_transportasi, layak_pip, bank_name, akta_lahir, bank_account_number, bank_account_name, handphone, email)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_siswa,
        param.nama_lengkap,
        param.jenis_kelamin,
        param.tempat_lahir,
        param.tanggal_lahir,
        param.agama,
        param.kewarganegaraan,
        param.kebutuhan_khusus,
        param.alamat,
        param.tempat_tinggal,
        param.moda_transportasi,
        param.layak_pip,
        param.bank_name,
        param.akta_lahir,
        param.bank_account_number,
        param.bank_account_name,
        param.handphone,
        param.email,
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

const selectSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM siswa where id_siswa = ?";
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

const updateSiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "UPDATE siswa set nama_lengkap=?, alamat=?, handphone=?, email=? where id_siswa=?";
    var values = [
      param.nama_lengkap,
      param.alamat,
      param.handphone,
      param.email,
      param.id_siswa,
    ];

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

const deleteSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "DELETE FROM siswa where id_siswa=?";
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
  insertSiswa,
  selectSiswa,
  updateSiswa,
  deleteSiswa,
};
