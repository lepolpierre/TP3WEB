"use strict";

const Rocket = require('../models/rocket');
const SpatioPort = require('../models/spatioport');



exports.createSearch = (req, res, next) => {
  // console.log(req.params);
  const {
    date,
    nbPerson,
    spatioportArrivalId,
    spatioportDepartureId
  } = req.params;
  // On récupère les noms des spacioport du formulaire, afin de faciliter la lecture, remplacer les noms variables 
  let spatioDep;
  let spatioArrival;

  // Rockets de la recherche
  let recherche;

  // Récupération spatioport Depat.
  SpatioPort.find({city: spatioportDepartureId})
    .then(s => {
      spatioDep = s[0];
    })
    .then(()=>{
      // Récupération spatioport arrivée.
      SpatioPort.find({city: spatioportArrivalId})
      .then(s=>{
        spatioArrival = s[0];
      })
      .then(()=>{
        // Ici on a obtenu les spatioport depart et arrivee..
        // Recherche
        Rocket.find()
        .then(rockets => {

          rockets = rockets.filter(r => {
            return r.spatioportDepartureId.toString() === spatioDep._id.toString()
            && r.spatioportArrivalId.toString() === spatioArrival._id.toString()
            && r.nbPlaceRemaining >= nbPerson;
          } );

          return rockets;

        })
        .then(result=>{
          console.log(result.length);
          res.status(200).json({result});
        });
      });
    })
    .catch(err=> next(err));
   



};