const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema([
 {
  URL: {
   type: String
  },
  state: {
   type: String
  },
  date: {
   type: Date
  },
  quote: {
   type: String
  },
  type: {
   type: String
  }
 }
]);

module.exports = mongoose.model("news", NewsSchema);
