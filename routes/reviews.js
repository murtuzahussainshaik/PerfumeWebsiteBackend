// routes/reviews.js
const express = require("express");
const router = express.Router();
const {
  getReviewsByProduct,
  addReview,
} = require("../controllers/reviewController");

router.route("/:productId").get(getReviewsByProduct).post(addReview);

module.exports = router;
