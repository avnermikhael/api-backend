var db = require("../helper/DBUtil");

const insertSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "INSERT INTO siswa" +
      "(id_siswa,nama_lengkap,jenis_kelamin,tempat_lahir)" +
      "VALUES" +
      "?";
    var values = [
      [
        param.id_siswa,
        param.nama_lengkap,
        param.jenis_kelamin,
        param.tempat_lahir,
        // param.tanggal_lahir,
        // param.agama,
        // param.kewarganegaraan,
        // param.kebutuhan_khusus,
        // param.alamat,
        // param.tempat_tinggal,
        // param.moda_transportasi,
        // param.layak_pip,
        // param.bank_name,
        // param.akta_lahir,
        // param.bank_account_number,
        // param.bank_account_name,
        // param.handphone,
        // param.email,
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

const selectAllSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM siswa";
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

const updateAyahSiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE siswa set id_ayah=? where id_siswa=?";
    var values = [param.id_ayah, param.id_siswa];

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

const updateIbuSiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE siswa set id_ibu=? where id_siswa=?";
    var values = [param.id_ibu, param.id_siswa];

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

const updateWaliSiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE siswa set id_wali=? where id_siswa=?";
    var values = [param.id_wali, param.id_siswa];

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

const updatePriodikSiswa = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = "UPDATE siswa set id_priodik=? where id_siswa=?";
    var values = [param.id_priodik, param.id_siswa];

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
  selectAllSiswa,
  updateSiswa,
  deleteSiswa,
  updateAyahSiswa,
  updateIbuSiswa,
  updateWaliSiswa,
  updatePriodikSiswa,
};
