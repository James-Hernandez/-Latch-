const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

module.exports = Post = mongoose.model('posts', PostSchema);