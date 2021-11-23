"use strict";
require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let loadedUser;
  User.findOne({email: email})
  .then(user =>{
    if (!user) {
      const error = new Error('Utilisateur non trouvée');
      error.statusCode = 404;
      throw error;
    }
    loadedUser = user;
    console.log('loadedUser', loadedUser);
    return bcrypt.compare(password, user.password);
  })
  .then(isEqual => {
    if (!isEqual) {
      const error = new Error('Mauvais mot de passe !');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        email: loadedUser.email,
        name: loadedUser.name,
        userId: loadedUser._id.toString(),
        level: loadedUser.level
      },
      process.env.SECRET_JWT,
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token });
  })
  .catch(err =>{
    next(err);
  });
};

exports.signup = (req, res, next) => {
  // Récupération des champs.
  const {email, name, password, level} = req.body;
  
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        name: name,
        password: hashedPassword,
        level: level
      });
      return user.save();
    })
    .then(result => {
      res.status(201).json({message: "Utilisateur créé !", userId: result.id});
    })
    .catch(err => {
      next(err);
    });
};

