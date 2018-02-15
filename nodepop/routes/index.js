var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');

// Se cargan las librerías de validaciones
const { query, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {

  // Se realiza la consulta en la base de datos
  Anuncio.find().exec((err, docs) => {
    if (err) {
      next(err);
      return;
    }

    // Se le pasan los resultados a la vista
    res.locals.anuncios = docs;

    // Se renderiza
    res.render('index', { title: 'Nodepop' });
  });
});

module.exports = router;