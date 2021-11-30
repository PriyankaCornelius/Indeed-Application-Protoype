const con = require("../sqldbConfig");
const CompanyReviews = require("../models/CompanyReviews");

exports.handle_request = function admin(msg, callback) {
    console.log("admin path:", msg.path);
    switch (msg.path) {
        case "reviewsperday":
            reviewsperday(msg, callback);
            break;
    }
};


function reviewsperday(msg, callback){
   
    console.log("Inside reviewsperday kafka backend");
    console.log(msg);
    console.log("In handle request:"+ JSON.stringify(msg));
    CompanyReviews.aggregate([
        { "$project": {createdAt: { $dateToString: { format: "%m-%d", date: "$createdAt"}}}},
        { "$group": { _id: { createdAt: "$createdAt"} , count: { $sum: 1 }}},
        { "$addFields": { createdAt: "$_id.createdAt" }},
        { "$sort" : {_id: 1}},
        { "$limit" : 7},
        { "$project": {createdAt: "$createdAt", count: 1, _id: false}},
      ],async (error, results) => {
        console.log(results);
      if (error){
        callback(null,{err: err})
        console.log(err);
      } else {
        callback(null, results);
      }
    });
};
