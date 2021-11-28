const con = require("../../sqldbConfig.js");

const handle_request = async (msg, callback) => {
  try {
    console.log("incoming message", msg);
    let sqlSelect = `SELECT  * FROM jobseekers where id = ?`;

    con.query(sqlSelect, [msg.id], (err, result) => {
      if (result) {
        callback(null, {
          email: result[0].email,
          // password: result[0].password,
          firstName: result[0].firstName,
          lastName: result[0].lastName,
          phoneNo: result[0].phoneNo,
          address: result[0].address,
          city: result[0].city,
          state: result[0].state,
          zip: result[0].zip,
          resumeURI: result[0].resumeURI,
        });
      } else throw err;
    });
  } catch (exception) {
    callback({ message: exception }, null);
  }
};
exports.handle_request = handle_request;
