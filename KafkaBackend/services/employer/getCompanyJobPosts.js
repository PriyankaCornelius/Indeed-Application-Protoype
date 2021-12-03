const { state, resume } = require("../../sqldbConfig.js");
const con = require("../../sqldbConfig.js");

const handle_request = async (msg, callback) => {
    try {
      let sqlSelect = `SELECT  * FROM jobs where companyId = ?`;
//   for draft jobs, add a column in jobs table- Draft(0/1) , and include draft==0 in above sqlSelect
      con.query(sqlSelect, [msg.id], (err, result) => {
        if (result) {
          callback(null, {
            result
          });
        } else throw err;
      });
    } catch (exception) {
      callback({ message: exception }, null);
    }
  };
  exports.handle_request = handle_request;