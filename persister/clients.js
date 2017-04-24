var mongoose = require('mongoose');

/**
 * Client Mongo DB model
 * @name userModel
 */
var clientsModel = function () {

  var clientsSchema = mongoose.Schema({
    content: String,
    username: String,
    company_name: String,
    //vote: Number,
    date: { type: Date, default: Date.now }
  });
 

  return mongoose.model('Clients', clientsSchema);
};

module.exports = new clientsModel();
