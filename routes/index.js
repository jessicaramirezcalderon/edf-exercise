const express = require("express");
const router = express.Router();
const request = require("request");
const cachedRequest = require("cached-request")(request);
const cacheDirectory = "./cache";

cachedRequest.setCacheDirectory(cacheDirectory);

router.get("/", function (req, res, next) {
  const ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;

  const options = {
    url: `https://ipapi.co/${ip}/json/`,
    ttl: 30000,
  };

  cachedRequest(options, function (error, response, body) {
    res.render("index", { data: body });
  });
});

module.exports = router;
