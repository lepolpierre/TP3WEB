"use strict";

const express = require('express');

const router = express.Router();

const searchController = require('../controllers/searchController');

// /search/ => GET
// spatioport ID ou nom ? => formulaire de recherche en lien
router.get('/search/:date/:nbPerson/:spatioportDepartureId/:spatioportArrivalId', searchController.createSearch);

module.exports = router;

