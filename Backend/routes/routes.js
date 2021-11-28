const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");

// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const AWS = require("aws-sdk");

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
//const redisClient = Redis.createClient();

const DEFAULT_EXPIRATION = 3600;

router.get("/getJobsList", function (req, res) {
  kafka.make_request("getJobsList", req.query, function (err, results) {
    console.log("in result");
    console.log(results);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      console.log("Inside else");
      res.status(200).json(results);
      res.end();
    }
  });
});

// router.get("/reviews/company/:companyid", async (req, res, next) => {
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
//   kafka.make_request(
//     "get_reviews_by_company_id0",
//     req.params.companyid,
//     function (err, results) {
//       if (err) {
//         res.writeHead(500, {
//           "Content-Type": "text/plain",
//         });
//         res.end("Error Occured");
//       } else {
//         res.writeHead(200, {
//           "Content-Type": "application/json",
//         });
//         res.end(JSON.stringify(results));
//       }
//     }
//   );
// });

router.get("/getprofile/company/:companyid", async (req, res, next) => {
  console.log("GET Request on Profile : ", req.query);
  kafka.make_request(
    "get_company_profile_by_company_id",
    req.query,
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

router.put("/updateprofile/company/:companyid", async (req, res, next) => {
  kafka.make_request(
    "put_company_profile_by_company_id",
    req.query,
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
        console.log("Profile Updated Successfully!");
        res.end(JSON.stringify(results));
      }
    }
  );
});

module.exports = router;
