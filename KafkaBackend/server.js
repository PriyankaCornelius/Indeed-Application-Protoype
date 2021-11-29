const { mongoDB } = require("./mongoDBConfig");
const mongoose = require("mongoose");

//topics files
var CompanyReviews = require("./services/CompanyReviews.js");
var GetEmployerProfile = require("./services/GetEmployerProfile");
var UpdateEmployerProfile = require("./services/PutEmployerProfile");
var AddCompanyReview = require("./services/jobSeeker/AddCompanyReview.js");
var LoginCommon = require("./services/LoginCommon.js");
var RegisterCommon = require("./services/RegisterCommon.js");
var SavedJobsByJobseeker = require("./services/SavedJobsByJobseeker.js");
var DeleteSavedJob = require("./services/DeleteSavedJob.js");
var AppliedJobsByJobseeker = require("./services/AppliedJobsByJobseeker.js");
var ApplyJob = require("./services/ApplyJob.js");

var JobList = require("./services/jobSeeker/getJobList.js");
var JobSeekerDetails = require("./services/jobSeeker/getJobSeekerDetails.js");
var UpdateJobSeekerDetails = require("./services/jobSeeker/updateJobSeekerDetails.js");
var ListOfJobSeekersReviews = require("./services/jobSeeker/listOfJobSeekersReviews");
var SaveJob = require("./services/jobSeeker/saveJob.js");
var GetSaveJobs = require("./services/jobSeeker/getSaveJobs.js");
var WhatTypeAheadList = require("./services/jobSeeker/getwhatTypeAheadList.js");
var WhereTypeAheadList = require("./services/jobSeeker/getwhereTypeAheadList.js");

var admin = require("./services/admin.js");
var connection = new require("./Connection");

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 500,
  wtimeoutMS: 2500,
};

mongoose.connect(mongoDB, options, (err, res) => {
  if (err) {
    console.log(err);
    console.log("MongoDB connection failed");
  } else {
    console.log("MongoDB connected!!");
  }
});

function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function (message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, (err, res) => {
      console.log("after handle", res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res,
          }),
          partition: 0,
        },
      ];

      producer.send(payloads, function (err, data) {
        console.log("error", err);
        console.log("data", data);
      });
      return;
    });
  });
}

// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("get_reviews_by_company_id", CompanyReviews);
handleTopicRequest("post_company_review", AddCompanyReview);
handleTopicRequest("login_common", LoginCommon);
handleTopicRequest("register_common", RegisterCommon);
handleTopicRequest("get_saved_jobs_by_jobseeker_id", SavedJobsByJobseeker);
handleTopicRequest("delete_saved_job", DeleteSavedJob);
handleTopicRequest("get_applied_jobs_by_jobseeker_id", AppliedJobsByJobseeker);
handleTopicRequest("apply_job", ApplyJob);
//handleTopicRequest("get_reviews_by_company_id0", CompanyReviews);
//handleTopicRequest("post_company_review", AddCompanyReview);
handleTopicRequest("get_company_profile_by_company_id", GetEmployerProfile);
handleTopicRequest("put_company_profile_by_company_id", UpdateEmployerProfile);
// handleTopicRequest("get_reviews_by_company_id0", CompanyReviews);
// handleTopicRequest("post_company_review", AddCompanyReview);
handleTopicRequest("getJobsList", JobList);
handleTopicRequest("getJobSeekerDetails", JobSeekerDetails);
handleTopicRequest("updateJobSeekerDetails", UpdateJobSeekerDetails);
handleTopicRequest("listOfJobSeekersReviews", ListOfJobSeekersReviews);

handleTopicRequest("whatTypeAheadList", WhatTypeAheadList);
handleTopicRequest("whereTypeAheadList", WhereTypeAheadList);
handleTopicRequest("saveJob", SaveJob);
handleTopicRequest("getSaveJob", GetSaveJobs);

handleTopicRequest("admin", admin);