const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");

const { mongoDB } = require("../mongoDBconfig");
const mongoose = require("mongoose");
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

const CompanyReviews = require("../models/CompanyReviews");

const Redis = require("redis");
const redisClient = Redis.createClient();

const DEFAULT_EXPIRATION = 3600;

const jwt = require("jsonwebtoken");
const { secret } = require("../mongoDBconfig");

router.get("/reviews/company/:companyid", async (req, res, next) => {
  //   const companyId = req.params.companyid;
  //   redisClient.get(`reviews?companyId=${companyId}`, async (error, reviews) => {
  //     if (error) console.log(error);
  //     if (reviews != null) {
  //       return res.json(JSON.parse(reviews));
  //     } else {
  //       CompanyReviews.find({ companyId: companyId }, (error, result) => {
  //         if (error) {
  //           res.json("error");
  //         } else {
  //           redisClient.setex(
  //             `reviews?companyId=${companyId}`,
  //             DEFAULT_EXPIRATION,
  //             JSON.stringify(result)
  //           );
  //           res.json(result);
  //         }
  //       });
  //     }
  //   });
  kafka.make_request(
    "get_reviews_by_company_id",
    req.params.companyid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

// router.post("/postReview/company", async (req, res, next) => {
//   kafka.make_request("post_company_review", req.body, function (err, results) {
//     if (err) {
//       res.writeHead(500, {
//         "Content-Type": "text/plain",
//       });
//       res.end("Error Occured");
//     } else {
//       res.writeHead(200, {
//         "Content-Type": "application/json",
//       });
//       res.end(JSON.stringify(results));
//     }
//   });
// });

// Common Login
router.post("/commonLogin", async (req, res, next) => {
  kafka.make_request("login_common", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      let finalData = [];
      finalData.push(results);
      const payload = { _id: results.id, email: results.email };
      const token = jwt.sign(payload, secret, {
        expiresIn: 1008000,
      });
      finalData.push(token);
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(finalData));
    }
  });
});

// Common Register
router.post("/commonRegister", async (req, res, next) => {
  kafka.make_request("register_common", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(results);
    }
  });
});

// Get Saved Jobs by Jobseeker Id
router.get("/savedJobs/get/:jobseekerid", async (req, res, next) => {
  kafka.make_request(
    "get_saved_jobs_by_jobseeker_id",
    req.params.jobseekerid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

// Get Applied Jobs by Jobseeker Id
router.get("/appliedJobs/get/:jobseekerid", async (req, res, next) => {
  kafka.make_request(
    "get_applied_jobs_by_jobseeker_id",
    req.params.jobseekerid,
    function (err, results) {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      } else {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(results));
      }
    }
  );
});

// Apply for a job
router.post("/applyJob", async (req, res, next) => {
  kafka.make_request("apply_job", req.body, function (err, results) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(results);
    }
  });
});

module.exports = router;
