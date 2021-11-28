const { state, resume } = require("../../sqldbConfig.js");
const con = require("../../sqldbConfig.js");

const handle_request = async (msg, callback) => {
  try {
    console.log("incoming message", msg);
    let sqlSelect1 = `SELECT  id FROM employers where companyName  = ?`;

    let sqlSelect2;

    let companyId;
    // console.log("where printing", msg.where);

    con.query(sqlSelect1, [msg.what], (err, result1) => {
      console.log("first selec...", result1);
      if (result1.length > 0) {
        companyId = result1[0].id;
        console.log("first selec result1", result1);
        sqlSelect2 = `SELECT  e.companyName, e.website, e.averageRating, e.totalReviews ,e.address, j.*  FROM jobs j , employers e where  j.companyId= e.id and city = ? and  companyId = ?`;
        con.query(sqlSelect2, [msg.where, companyId], (err, result2) => {
          if (result2.length > 0) {
            console.log("first selec result2", result2);

            callback(null, result2);
          }
        });
      } else {
        sqlSelect2 = `SELECT  e.companyName, e.website, e.averageRating ,e.totalReviews,e.address, j.* FROM jobs j , employers e where j.companyId= e.id and  city = ? and jobTitle = ? `;
        con.query(sqlSelect2, [msg.where, msg.what], (err, result2) => {
          if (result2) {
            callback(null, result2);
          }
        });
      }
    });
  } catch (exception) {
    callback({ message: exception }, null);
  }
};
exports.handle_request = handle_request;
