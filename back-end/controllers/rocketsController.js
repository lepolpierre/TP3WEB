"use strict";

const Rocket = require('../models/rocket');

exports.getRockets = (req, res, next) => {
    Rocket.find()
    .then(rockets => {
        res.json({
            rockets: rockets
        })
    })
    .catch(err => {
        next(err)
    })
};

exports.getRocket = (req, res, next) => {
    const rocketId = req.params.rocketId;
    Rocket.findById(rocketId)
    
    .then(rockets => {
        if (!rockets) {
            const error = new Error('La rocket n\'existe pas.');
            error.statusCode = 404;
            throw error;
        }
        res.json({
            rockets: rockets
        })
    })
    .catch(err => {
        next(err)
    })
};

exports.createRocket = (req, res, next) => {
    const date = req.body.rocketId;
    const nbPlace = req.body.nbPerson;
    const nbPlaceRemaining = req.body.price;
    const price = req.body.rocketId;
    const image = req.body.nbPerson;
    const name = req.body.price;
    const spatioportDepartureId = req.body.nbPerson;
    const spatioportArrivalId = req.body.price;

    const rocket = new Rocket({
        userId: req.user.userId
    });

    rocket.save()
        .then(result => {
            res.status(200).json({
                message: "Fusee crer",
                rocket: rocket
            });
        })
        .catch(err => {
            next(err);
        });
};

exports.deleteRocket = (req, res, next) => {
    const rocketId = req.params.rocketId;
    console.log('rocketId', rocketId)
    Rocket.findByIdAndRemove(rocketId)
    .then(() => {
      console.log('rocket supprimé');
      res.status(200).json({ message: "rocket supprimé" });
    });
};


