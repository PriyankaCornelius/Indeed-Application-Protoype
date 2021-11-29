const con = require("../sqldbConfig");
const CompanyReviews = require("../models/CompanyReviews");

exports.handle_request = function admin(msg, callback) {
    console.log("admin path:", msg.path);
    switch (msg.path) {
        case "allcompanies":
            allcompanies(msg, callback);
            break;
        case "companysearch":
            companysearch(msg, callback);
            break;
        case "viewcompanyreview":
            viewcompanyreview(msg, callback);
            break;
    }
};


function allcompanies(msg, callback){
    console.log("Inside allcompanies kafka backend");
    // console.log(msg);
    console.log("In handle request:"+ JSON.stringify(msg));
    let allComp = "SELECT * FROM indeed.employers";
    con.query(allComp, async (error, results) => {
    console.log(results);
      if (error){
        callback(null,{err: err})
        console.log(err);
      } else {
        callback(null, results);
      }
   });
};

function companysearch(msg, callback){
    console.log("Inside companysearch kafka backend");
    // console.log(msg);
    console.log("In handle request:"+ JSON.stringify(msg));
    let companySearch = "SELECT * FROM indeed.employers WHERE companyName = ?";
    con.query(companySearch, [msg.body.search], async (error, results) => {
    console.log(results);
      if (error){
        callback(null,{err: err})
        console.log(err);
      } else {
        callback(null, results);
      }
    });
};

function viewcompanyreview(msg, callback){
    console.log("Inside viewcompanyreview kafka backend");
    // console.log(msg);
    console.log("In handle request:"+ JSON.stringify(msg));
    CompanyReviews.find({companyName: msg.body.companyName},async (error, results) => {
        console.log(results);
        if (error){
            callback(null,{err: err})
            console.log(err);
          } else {
            callback(null, results);
          }
    });
};