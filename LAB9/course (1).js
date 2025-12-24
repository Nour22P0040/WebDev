const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: "£" },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  tag: { type: String }, 
  image: { type: String }, 
  category: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);