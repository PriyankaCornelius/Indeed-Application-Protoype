const CompanyReviews = require("../models/CompanyReviews");

function handle_request(msg, callback) {
  CompanyReviews.find({ companyId: msg }, (error, result) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, result);
    }
  });
}

exports.handle_request = handle_request;
