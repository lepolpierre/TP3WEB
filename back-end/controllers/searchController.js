"use strict";

const Rocket = require('../models/rocket');



exports.createSearch = (req, res, next) => {

  Rocket.find()
  .then(rockets =>{
    res.status(200).json({result: rockets});

  })
  .catch(err=> next(err));
    
};