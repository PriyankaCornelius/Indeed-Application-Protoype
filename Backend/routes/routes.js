const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");
const con = require("../sqlDbConfig");

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

const jwt = require("jsonwebtoken");
const { secret } = require("../mongoDBconfig");

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

// Delete saved job
router.post("/savedJobs/delete/:savedjobid", async (req, res, next) => {
  req.body.savedjobid = req.params.savedjobid;
  kafka.make_request("delete_saved_job", req.body, function (err, results) {
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
  });
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


router.get("/reviewsperday", async (req, res, next) => {
  console.log("GET Request on reviews");
  kafka.make_request('admin',{"path": "reviewsperday", "body": req.body}, function(err,results){
    console.log('GET Request on reviews');
    // console.log(results);
    if (err){
        console.log("Inside err");
    }else{
        console.log("Inside results");
        console.log(results);
        res.send(results);
    }
});
});


router.get("/mostreviewedcompanies", async (req, res, next) => {
  console.log("GET Request on mostreviews");
  CompanyReviews.aggregate([
    
    { "$group": { _id: { companyName: "$companyName"} , count: { $sum: 1 }}},
    { "$addFields": { companyName: "$_id.companyName" }},
    { "$sort" : {count: -1}},
    { "$limit" : 5},
    { "$project": {companyName: "$companyName", count: 1, _id: 0}},
  ],async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});


router.get("/avgratings", async (req, res, next) => {
  console.log("GET Request on avgRatings");
  CompanyReviews.aggregate([
    { "$match": {status: "Approved"}},
    { "$group": { _id: { companyName: "$companyName"}, avgrating: {$avg: "$rating"}, count: { $sum: 1 }}},
    { "$addFields": { companyName: "$_id.companyName" }},
    { "$sort" : {avgrating: -1}},
    { "$limit" : 5},
    { "$project": {companyName: "$companyName", count: 1, avgrating: 1, _id: 0}},
  ],async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});


router.get("/jobseekerreviews", async (req, res, next) => {
  console.log("GET Request on jobseekerreviews");
  CompanyReviews.aggregate([
    { "$match": {status: "Approved"}},
    { "$group": { _id: { applicantName: "$applicantName"},  count: { $sum: 1 }}},
    { "$addFields": { applicantName: "$_id.applicantName" }},
    { "$sort" : {count: -1}},
    { "$limit" : 5},
    { "$project": {applicantName: "$applicantName", count: 1,  _id: 0}},
  ],async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
});
});


router.get("/topceos", async (req, res, next) => {
  console.log("GET Request on topceos");
  con.query("SELECT ceoName, ceoRating FROM indeed.employers order by ceoRating DESC LIMIT 10",
  async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});


router.get("/dailyviews", async (req, res, next) => {
  console.log("GET Request on dailyviews");
  con.query("SELECT employerName, dailyViews FROM indeed.employers order by dailyViews DESC LIMIT 10",
  async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});


router.get("/allreviews", async (req, res, next) => {
  console.log("GET Request on allreviews");
  CompanyReviews.find({},async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});

router.post("/filterreviews", async (req, res, next) => {
  console.log("GET Request on filterreviews");
  CompanyReviews.find({status: req.body.filter},async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});

router.post("/reviewactions", async (req, res, next) => {
  console.log("Post Request on reviewactions");
  console.log(req.body);
  CompanyReviews.findOneAndUpdate({_id: req.body.id},{ $set : {status: req.body.status}},
  async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    setValue(results.companyName);
    // console.log(resCompName);
    res.send(results);
  }
});

function setValue(value) {
  fCompName = value;
  console.log(fCompName);
  CompanyReviews.aggregate([
    { "$match": {companyName: fCompName}},
    { "$group": { _id: { companyName: "$companyName"}, avgrating: {$avg: "$rating"}, avgceorating: {$avg: "$ceoRating"}, count: { $sum: 1 }}},
    { "$addFields": { companyName: "$_id.companyName" }},
    { "$project": {companyName: "$companyName", count: 1, avgrating: 1, avgceorating: 1, _id: 0}},
  ],async (error, results) => {
    // console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    sqlUpdate(results);
  }
});
}

function sqlUpdate(sqlup) {
  let sqlUpdate = "UPDATE indeed.employers " + "SET averageRating = ?, ceoRating= ?, totalReviews= ? WHERE companyName = ?";
  con.query(sqlUpdate, [sqlup[0].avgrating, sqlup[0].avgceorating, sqlup[0].count, sqlup[0].companyName],
  async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    console.log("MySQL Updated!");
  }
})
}

});


router.get("/allcompanies", async (req, res, next) => {
  console.log("GET Request on allcompanies");
  let allComp = "SELECT * FROM indeed.employers";
  con.query(allComp, async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});

router.post("/companysearch", async (req, res, next) => {
  console.log("POST Request on companysearch");
  let companySearch = "SELECT * FROM indeed.employers WHERE companyName = ?";
  con.query(companySearch, [req.body.search], async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});

router.post("/viewcompanyreview", async (req, res, next) => {
  console.log("POST Request on viewcompanyreview");
  console.log(req.body);
  CompanyReviews.find({companyName: req.body.companyName},async (error, results) => {
    console.log(results);
  if (error){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(error.code);
  } else {
    res.send(results);
  }
})
});

module.exports = router;
