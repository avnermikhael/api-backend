var db = require("../helper/DBUtil");

// const insertUser = async (param, createdBy) => {
//   return new Promise(function (resolve, reject) {
//     let sql =
//       "INSERT INTO tb_m_user" +
//       "(id,name,email,password,created_date,created_by,updated_date,updated_by)" +
//       "VALUES" +
//       "?";
//     let dt = new Date();
//     var values = [
//       [
//         param.id,
//         param.name,
//         param.email,
//         param.password,
//         dt,
//         createdBy,
//         dt,
//         createdBy,
//       ],
//     ];

//     db.query(sql, [values], function (err, result) {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

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

// const updateUser = async (param, id) => {
//   return new Promise(function (resolve, reject) {
//     let sql =
//       "UPDATE tb_m_user set name=?, email=?, updated_date=?, updated_by=? where id=?";
//     let dt = new Date();
//     var values = [param.name, param.email, dt, param.updatedBy, id];

//     db.query(sql, values, function (err, result) {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// const deleteUser = async (param) => {
//   return new Promise(function (resolve, reject) {
//     let sql = "DELETE FROM tb_m_user where id=?";
//     var values = [param.id];

//     db.query(sql, values, function (err, result) {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

module.exports = {
  // insertUser,
  selectSiswa,
  // updateUser,
  // deleteUser
};
