const con = require("../sqldbConfig");

function handle_request(msg, callback) {
  console.log("Inside the Function!!!");
  let table = "";
  if (msg.personaType === "js") table = "jobseekers";
  else if (msg.personaType === "e") table = "employers";
  else table = "admins";
  let query =
    "select t.*, '" +
    msg.personaType +
    "' as personaType from " +
    table +
    " t where t.email = '" +
    msg.email +
    "' and t.password = '" +
    msg.password +
    "'";
  con.query(query, (err, results) => {
    if (err) {
      console.log("error kya h", err);
      callback(err, "Error");
    } else {
      if (results.length > 0) callback(null, results);
      else callback(err, "Invalid Credentials");
    }
  });
}

exports.handle_request = handle_request;
