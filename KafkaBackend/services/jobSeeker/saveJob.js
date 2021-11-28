const con = require("../../sqldbConfig.js");

const handle_request = async (msg, callback) => {
  try {
    console.log("incoming message", msg);
    let insertSQL = `INSERT into savedjobs (applicantId, jobId) values (?,?) `;
    if (msg.applicantId) {
      con.query(insertSQL, [msg.applicantId, msg.jobId], (err, result) => {
        if (result) {
          callback(null, { message: "Job saved" });
        } else throw err;
      });
    } else throw err;
  } catch (exception) {
    callback({ message: exception }, null);
  }
};
exports.handle_request = handle_request;
