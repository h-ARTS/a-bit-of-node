const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  abbr: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'leadership'
});

const Leader = mongoose.model('Leadership', leaderSchema);

module.exports = Leader;