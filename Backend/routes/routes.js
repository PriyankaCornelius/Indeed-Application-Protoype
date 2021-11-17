const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");

router.get("/reviews/company/:companyid", async (req, res, next) => {
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

module.exports = router;
