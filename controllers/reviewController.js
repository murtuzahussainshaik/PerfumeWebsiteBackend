// controllers/reviewController.js
const Review = require("../models/Review");

// Get reviews for a product
exports.getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add a review
exports.addReview = async (req, res) => {
  try {
    const { userName, rating, comment } = req.body;

    const review = new Review({
      product: req.params.productId,
      userName,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
