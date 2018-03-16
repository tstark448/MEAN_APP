'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Review Schema
 */
var ReviewSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Review name',
    trim: true
  },
  review: {
    type: String,
    default: '',
    required: 'Please fill Review Body',
    trim: true
  },

rating: {
  type: String, 
  default: 5,
  required:'Please rate from 1 to 5'
},



  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Review', ReviewSchema);
