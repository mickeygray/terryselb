const express = require("express");
const router = express.Router();
const News = require("../models/News");
router.post(
 "/",

 async (req, res) => {
  const news = req.body;
  console.log(news);
 }
);

module.exports = router;
