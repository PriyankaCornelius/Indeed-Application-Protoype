const con = require("../../sqldbConfig.js");

const handle_request = (msg, callback) => {
  try {
    let finalResult = [];
    console.log("incoming message", msg);
    let sqlSelect1 = `SELECT  jobTitle  FROM jobs  where 
       jobTitle like '%${msg.what}%' `;

    let sqlSelect2 = `SELECT  companyName FROM employers  where 
       companyName like '%${msg.what}%' `;

    con.query(sqlSelect1, [], (err, result1) => {
      if (result1.length > 0) {
        console.log("result1 message", result1);
        finalResult.push(
          ...result1.map((row) => {
            return row.jobTitle;
          })
        );
      }

      con.query(sqlSelect2, [], (err, result2) => {
        if (result2) {
          console.log("result2 message", result2);
          finalResult.push(
            ...result2.map((row) => {
              return row.companyName;
            })
          );
          console.log("finalResult", finalResult);

          if (finalResult) {
            callback(null, finalResult);
          }
        } else throw err;
      });
    });
  } catch (exception) {
    callback({ message: exception }, null);
  }
};
exports.handle_request = handle_request;
