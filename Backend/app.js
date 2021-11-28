// created by Archita

const express = require("express");
const cors = require("cors");
const con = require("./sqlDbConfig");

const { mongoDB } = require("./mongoDBconfig");
const mongoose = require("mongoose");

const kafka = require("./kafka/client");

// const Router = require("./routes");
const path = require("path");
var bodyParser = require("body-parser");

// const passport = require("passport");
// const { checkAuth } = require("./Controller/Common/passport");
// const { auth } = require("./Controller/Common/passport");

const app = express();
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const AWS = require("aws-sdk");

app.use(express.json());
app.use(cors());
// app.use(passport.initialize());

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // maxPoolSize: 500,
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

// const uploadS3 = multer({
//   storage: multerS3({
//     s3: s3,
//     acl: "public-read",
//     bucket: "ubereatsimages-273",
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString() + "-" + file.originalname);
//     },
//   }),
// });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "/images")));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: function (req, file, cb) {
//     console.log("File name : ", file);
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// auth();
// var upload = multer({ storage: storage });

//------------------------------------------------------------------------------
app.post("/getJobsList", function (req, res) {
  kafka.make_request("getJobsList", req.body, function (err, results) {
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

app.get("/getJobSeekerDetails", function (req, res) {
  kafka.make_request("getJobSeekerDetails", req.query, function (err, results) {
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

app.post("/updateJobSeekerDetails", function (req, res) {
  kafka.make_request(
    "updateJobSeekerDetails",
    req.body,
    function (err, results) {
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
    }
  );
});

app.get("/getJobSeekerReviews", function (req, res) {
  kafka.make_request(
    "listOfJobSeekersReviews",
    req.query,
    function (err, results) {
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
    }
  );
});

app.get("/getWhatTypeAheadList", function (req, res) {
  kafka.make_request("whatTypeAheadList", req.query, function (err, results) {
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

app.get("/getWhereTypeAheadList", function (req, res) {
  kafka.make_request("whereTypeAheadList", req.query, function (err, results) {
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

app.post("/saveJob", function (req, res) {
  kafka.make_request("saveJob", req.body, function (err, results) {
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

app.post("/getSaveJob", function (req, res) {
  kafka.make_request("getSaveJob", req.body, function (err, results) {
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;
